import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);