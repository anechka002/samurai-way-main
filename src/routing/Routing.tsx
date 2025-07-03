import { Routes, Route } from 'react-router';
import { Dialogs } from '../components/dialogs/Dialogs';
import {Profile} from '../components/profile/Profile';
import { PATH } from '../constans/constans';
import { News } from '../components/news/News';
import { RootStateType } from '../redux/state';

type Props = {
  // handleIncrementLikesCount: (postId: string) => void
  state: RootStateType
  addPost: (post: string) => void
  updateNewPostText: (newText: string) => void
  addMessage: (message: string) => void
  updateNewMessageText: (newText: string) => void
}

export const Routing = ({state, addPost, updateNewPostText, addMessage, updateNewMessageText}: Props) => {
  return (
    <Routes>
      <Route path={PATH.DIALOGS} element={<Dialogs state={state.dialogsPage} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>}/>
      <Route path={PATH.PROFILE} element={<Profile updateNewPostText={updateNewPostText} addPost={addPost} state={state.profilePage}/>}/>
      <Route path={PATH.NEWS} element={<News/>}/>
    </Routes>
  )
}
