import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserType } from '../Dialogs';
import s from './DialogItem.module.css'

type PropsType = {
  user: UserType
}

function DialogItem({user}: PropsType) {
  let path = '/dialogs/' + user.id;
  return (
    <div className={s.item}>
      <div className={s.dialog + '' + s.active}>
        <NavLink 
          // className={isActive => s.dialog + (!isActive ? s.dialog  : s.active)} 
          to={path}>{user.name}</NavLink>
      </div>
    </div>
  )
}

export default DialogItem;

// className={(navData)=> (navData.isActive ? s.active : s.dialog)}