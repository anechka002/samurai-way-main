import './App.css';
import Header from './components/header/Header';
import { Routing } from './routing/Routing';
import { NavBar } from './components/navBar/NavBar';

function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <NavBar/>
      <div className='app-wrapper-content'>
        <Routing/>
      </div>
    </div>
  )
}

export default App;
