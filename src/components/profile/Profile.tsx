import { ProfilePageType } from '../../redux/state';
import s from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';

type Props = {
  state: ProfilePageType
  addPost: (post: string) => void
  updateNewPostText: (newText: string) => void
  // handleIncrementLikesCount: (postId: string) => void
}

export const Profile = ({state, addPost, updateNewPostText}: Props) => {
  
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPosts updateNewPostText={updateNewPostText} newPostText={state.newPostText} posts={state.posts} addPost={addPost}/>
    </div>
  )
}
