import React, { useState } from 'react'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import { Message } from './message/Message'

export type UserType = {
  id: number
  name: string
}

export type MessageType = {
  id: number
  text: string
}

export const Dialogs = () => {

  const [users, setUsers] = useState<UserType[]>([
    {id: 1, name: 'Sveta'},
    {id: 2, name: 'Anna'},
    {id: 3, name: 'Viktor'},
    {id: 4, name: 'Valera'},
    {id: 5, name: 'Alex'},
    {id: 6, name: 'John'},
  ])

  const [messages, setMessages] = useState<MessageType[]>([
    {id: 1, text: 'Hi'},
    {id: 2, text: 'Hello'},
    {id: 3, text: 'Ok'},
  ])

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {users.map((user) => (
          <DialogItem 
            key={user.id}
            user={user}
          />  
        ))}
      </div>
      <div className={s.message}>
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
          />
        ))}
      </div>
    </div>
  )
}