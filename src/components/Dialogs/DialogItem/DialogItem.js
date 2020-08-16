import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + ' ' + s.active}>
      {/* <img src={props.avatar}></img> */}
      <img src='https://cs9.pikabu.ru/avatars/2245/x2245012-1696640051.png'></img>
      <NavLink to={path}>{props.name}</NavLink>
    </div>);
}

export default DialogItem;