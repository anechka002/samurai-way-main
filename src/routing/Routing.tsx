import { Routes, Route } from 'react-router';
import { Dialogs } from '../components/dialogs/Dialogs';
import { Profile } from '../components/profile/Profile';
import { PATH } from '../constans/constans';
import { News } from '../components/news/News';
import { ActionsTypes, RootStateType } from '../redux/state';

type Props = {
  // handleIncrementLikesCount: (postId: string) => void
  state: RootStateType;
  dispatch: (action: ActionsTypes) => void;
};

export const Routing = ({ state, dispatch }: Props) => {
  return (
    <Routes>
      <Route
        path={PATH.DIALOGS}
        element={<Dialogs state={state.dialogsPage} dispatch={dispatch} />}
      />
      <Route
        path={PATH.PROFILE}
        element={<Profile state={state.profilePage} dispatch={dispatch} />}
      />
      <Route path={PATH.NEWS} element={<News />} />
    </Routes>
  );
};
