import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
  return (
    <div className={s.message}>
      <div className={s.avatar}>
      <img src='https://cs9.pikabu.ru/avatars/2245/x2245012-1696640051.png'></img>
      </div>
      <div className={s.text}>
      {props.message}
      </div>
    </div>);
}

export default Message;