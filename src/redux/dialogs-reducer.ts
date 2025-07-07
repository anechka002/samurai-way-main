import { ActionsTypes, DialogPageType, MessageType } from './state';

export const dialogsReducer = (
  state: DialogPageType,
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
