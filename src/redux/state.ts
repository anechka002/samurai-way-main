import { v1 } from 'uuid';
import { renderTree } from '../render';

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
};
export type SidebarType = {};
export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
  sidebar: SidebarType;
};

export const state: RootStateType = {
  profilePage: {
    posts: [
      {
        id: v1(),
        img: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png',
        message: 'Hi, how are you?',
        likesCount: 10,
      },
      {
        id: v1(),
        img: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png',
        message: "I'm learn React",
        likesCount: 5,
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
  },
  sidebar: {},
};

export const addPost = (postText: string) => {
  const newPost: PostType = {
    id: v1(),
    img: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png',
    message: postText,
    likesCount: 0,
  }
  state.profilePage.posts = [newPost, ...state.profilePage.posts]
  state.profilePage.newPostText = ''
  renderTree(state)
}

export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText
  renderTree(state)
}
