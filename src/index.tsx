import './index.css';
import {store} from './redux/state'
import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';
import App from './App';


const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

export const renderTree = () => {
  root.render(
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>
  );
};

store.subscribe(renderTree)
renderTree()