import s from './Dialogs.module.css'
import { Message } from './message/Message'
import { DialogItem } from './dialogItem/DialogItem'
import { DialogPageType } from '../../redux/state'
import { useRef } from 'react'

type Props = {
  state: DialogPageType
}

export const Dialogs = ({state}: Props) => {
  let ref = useRef<HTMLTextAreaElement>(null)

  const addMessage = () => {
    let message = ref.current?.value
    alert(message)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {state.users.map((user) => (
          <DialogItem 
            key={user.id}
            user={user}
          />  
        ))}
      </div>
      <div className={s.message}>
        {state.messages.map((message) => (
          <Message
            key={message.id}
            message={message}
          />
        ))}
        <div className={s.messageInput}>
          <textarea ref={ref}></textarea>
          <button onClick={addMessage}>send</button>
        </div>
      </div>
    </div>
  )
}