import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

  let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} />)

  let newSendElement = React.createRef();
  let toSend = () => {
    let text = newSendElement.current.value;
    // props.toSend(text);
    props.dispatch({type: 'TO-SEND'});
    newSendElement.current.value = '';
  };

  let onMessageChange = () => {
    let text = newSendElement.current.value;
    // props.updateNewMessageText(text);
    let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text}
    props.dispatch(action);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogElements}
      </div>

      <div className={s.messages}>
        {messageElements}
      </div>
      <div>
        <textarea ref={newSendElement} onChange={onMessageChange} value={props.newMessageText} />
        <button onClick={toSend}>Send</button>
      </div>
    </div>); 
}

export default Dialogs;