import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { toSendActionCreator, onMessageChangeActionCreator } from './../../redux/dialogsReducer';


const Dialogs = (props) => {

  let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

  let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} />)

  let newSendElement = React.createRef();
  let toSend = () => {
    props.dispatch(toSendActionCreator());
  };

  let onMessageChange = (e) => {
    // let text = newSendElement.current.value;
    let text = e.target.value;
    props.dispatch(onMessageChangeActionCreator(text))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogElements}
      </div>

      <div>
        <div className={s.messages}>{messageElements}</div>
        <div>
          <textarea placeholder='Enter your message' ref={newSendElement} onChange={onMessageChange} value={props.newMessageText} /></div>
        <div><button onClick={toSend}>Send</button>
        </div>
      </div>

    </div>);
}

export default Dialogs;