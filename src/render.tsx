import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';
import App from './App';
import { addPost, RootStateType, updateNewPostText, addMessage, updateNewMessageText } from './redux/state';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

export const renderTree = (state: RootStateType) => {
  root.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
    </BrowserRouter>
  );
};
