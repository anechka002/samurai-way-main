import s from './Dialogs.module.css';
import { Message } from './message/Message';
import { DialogItem } from './dialogItem/DialogItem';
import { ActionsTypes, DialogPageType } from '../../redux/state';
import { ChangeEvent } from 'react';

type Props = {
  state: DialogPageType;
  dispatch: (action: ActionsTypes) => void
};

export const Dialogs = ({ state, dispatch }: Props) => {
  const addMessageHandler = () => {
    dispatch({type: 'ADD-MESSAGE', message: state.newMessage});
  };

  const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: e.currentTarget.value});
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {state.users.map((user) => (
          <DialogItem key={user.id} user={user} />
        ))}
      </div>
      <div className={s.message}>
        {state.messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div className={s.messageInput}>
          <textarea value={state.newMessage} onChange={onMessageChangeHandler}></textarea>
          <button onClick={addMessageHandler}>send</button>
        </div>
      </div>
    </div>
  );
};
