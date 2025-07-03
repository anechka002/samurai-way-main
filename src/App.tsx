import './App.css';
import Header from './components/header/Header';
import { Routing } from './routing/Routing';
import { NavBar } from './components/navBar/NavBar';
import { RootStateType } from './redux/state';

type Props = {
  state: RootStateType
  addPost: (post: string) => void
  updateNewPostText: (newText: string) => void
  addMessage: (message: string) => void
  updateNewMessageText: (newText: string) => void
}

function App({state, addPost, updateNewPostText, addMessage, updateNewMessageText}: Props) {

  // const handleIncrementLikesCount = (postId: string) => {
  //   setPosts(
  //     posts.map((p) =>
  //       p.id === postId ? { ...p, likesCount: p.likesCount + 1 } : p
  //     )
  //   );
  // };


  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routing
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          addMessage={addMessage}
          updateNewMessageText={updateNewMessageText}
          // handleIncrementLikesCount={handleIncrementLikesCount}
        />
      </div>
    </div>
  );
}

export default App;
