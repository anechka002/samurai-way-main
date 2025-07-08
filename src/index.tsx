import './index.css';
import { store } from './redux/redux-store';
import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
)