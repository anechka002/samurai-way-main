import React from 'react';
import { MessageType } from '../Dialogs';
import s from './Message.module.css'

type PropsType = {
  message: MessageType
}

export const Message = ({message}: PropsType) => {
  return (
    <div className={s.message}>{message.text}</div>
  )
}