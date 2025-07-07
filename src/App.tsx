import './App.css';
import Header from './components/header/Header';
import { Routing } from './routing/Routing';
import { NavBar } from './components/navBar/NavBar';
import { StoreType } from './redux/state';

type Props = {
  store: StoreType;
};

function App({store}: Props) {
  const state = store.getState();

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
          dispatch={store.dispatch.bind(store)}
          // handleIncrementLikesCount={handleIncrementLikesCount}
        />
      </div>
    </div>
  );
}

export default App;
