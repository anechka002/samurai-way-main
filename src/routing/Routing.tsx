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
}

export const Routing = ({state, addPost, updateNewPostText}: Props) => {
  return (
    <Routes>
      <Route path={PATH.DIALOGS} element={<Dialogs state={state.dialogsPage}/>}/>
      <Route path={PATH.PROFILE} element={<Profile updateNewPostText={updateNewPostText} addPost={addPost} state={state.profilePage}/>}/>
      <Route path={PATH.NEWS} element={<News/>}/>
    </Routes>
  )
}
