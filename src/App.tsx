import './App.css';
import Header from './components/header/Header';
import { Routing } from './routing/Routing';
import { NavBar } from './components/navBar/NavBar';
import { RootStateType } from './redux/state';

type Props = {
  state: RootStateType
  addPost: (post: string) => void
  updateNewPostText: (newText: string) => void
}

function App({state, addPost, updateNewPostText}: Props) {

  // const handleIncrementLikesCount = (postId: string) => {
  //   setPosts(
  //     posts.map((p) =>
  //       p.id === postId ? { ...p, likesCount: p.likesCount + 1 } : p
  //     )
  //   );
  // };

  // const addPost = (message: string) => {
  //   let newPost: PostType = {
  //     id: v1(),
  //     img: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png',
  //     message: message,
  //     likesCount: 0,
  //   };
  //   setPosts([newPost, ...posts]);
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
          // handleIncrementLikesCount={handleIncrementLikesCount}
        />
      </div>
    </div>
  );
}

export default App;
