import { ActionsTypes, DialogPageType, MessageType } from './store';

const initState = {
  users: [
    { id: 1, name: 'Sveta' },
    { id: 2, name: 'Anna' },
    { id: 3, name: 'Viktor' },
    { id: 4, name: 'Valera' },
    { id: 5, name: 'Alex' },
    { id: 6, name: 'John' },
  ],
  messages: [
    { id: 1, text: 'Hi' },
    { id: 2, text: 'Hello' },
    { id: 3, text: 'Ok' },
    { id: 4, text: 'Yo' },
  ],
  newMessage: '',
};

export const dialogsReducer = (
  state: DialogPageType = initState,
  action: ActionsTypes
): DialogPageType => {
  switch (action.type) {
    case 'SEND-MESSAGE': {
      const newMessage: MessageType = {
        id: 5,
        text: action.message,
      };
      return {
        ...state,
        messages: [newMessage, ...state.messages],
        newMessage: '',
      };
    }
    case 'UPDATE-NEW-MESSAGE-TEXT': {
      return {
        ...state,
        newMessage: action.newText,
      };
    }
    default: {
      return state;
    }
  }
};
