import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {

  let dialogs = [
    { id: 1, name: 'Sonya' },
    { id: 2, name: 'Dima' },
    { id: 3, name: 'Kira' },
    { id: 4, name: 'Tema' },
    { id: 5, name: 'Tanya' }
  ]

  let messages = [
    { id: 1, message: 'hi' },
    { id: 2, message: 'hi-hi' },
    { id: 3, message: 'hihihihi' },
    { id: 4, message: 'hi-hi-hi' },
    { id: 5, message: 'hihihihihihi' }
  ]

  let dialogElements = dialogs.map(d =>
    <DialogItem name={d.name} id={d.id} />);

  let messageElements = messages.map(m => <Message message={m.message} />)
  

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogElements}
      </div>

      <div className={s.messages}>
        {messageElements}
      </div>
    </div>);
}

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>);
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>);
}

export default Dialogs;