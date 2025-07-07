import { v1 } from 'uuid';

export type PostType = {
  id: string;
  img: string;
  message: string;
  likesCount: number;
};
export type UserType = {
  id: number;
  name: string;
};
export type MessageType = {
  id: number;
  text: string;
};
export type ProfilePageType = {
  posts: PostType[];
  newPostText: string;
};
export type DialogPageType = {
  users: UserType[];
  messages: MessageType[];
  newMessage: string;
};
export type SidebarType = {};
export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
  sidebar: SidebarType;
};

export type StoreType = {
  _state: RootStateType;
  _callSubscriber: () => void;
  getState: () => RootStateType;
  subscribe: (observer: () => void) => void;
  dispatch: (action: ActionsTypes) => void;
};

export const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {
          id: v1(),
          img: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png',
          message: "I'm learn React",
          likesCount: 5,
        },
        {
          id: v1(),
          img: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png',
          message: 'Hello, how are you?',
          likesCount: 10,
        },
      ],
      newPostText: 'Test',
    },
    dialogsPage: {
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
      newMessage: 'Hello',
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    switch (action.type) {
      case 'ADD-POST': {
        const newPost: PostType = {
          id: v1(),
          img: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png',
          message: this._state.profilePage.newPostText,
          likesCount: 0,
        };
        this._state.profilePage.posts = [
          newPost,
          ...this._state.profilePage.posts,
        ];
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
        break;
      }
      case 'UPDATE-NEW-POST-TEXT': {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber();
        break;
      }
      case 'ADD-MESSAGE': {
        const newMessage: MessageType = {
          id: 5,
          text: action.message,
        };
        this._state.dialogsPage.messages = [
          newMessage,
          ...this._state.dialogsPage.messages,
        ];
        this._state.dialogsPage.newMessage = '';
        this._callSubscriber();
        break
      }
      case 'UPDATE-NEW-MESSAGE-TEXT': {
        this._state.dialogsPage.newMessage = action.newText;
        this._callSubscriber();
        break
      }
      default: {
        break;
      }
    }
  },
};

export type ActionsTypes =
  | AddPostActionType
  | UpdateNewPostTextActionType
  | AddMessageActionType
  | UpdateNewMessageTextActionType;

type AddPostActionType = {
  type: 'ADD-POST';
  newPostText: string;
};
type UpdateNewPostTextActionType = {
  type: 'UPDATE-NEW-POST-TEXT';
  newText: string;
};
type AddMessageActionType = {
  type: 'ADD-MESSAGE';
  message: string;
};
type UpdateNewMessageTextActionType = {
  type: 'UPDATE-NEW-MESSAGE-TEXT';
  newText: string;
};

(window as any).store = store;
