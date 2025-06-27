import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import NavBar, { PATH } from './components/navBar/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import { Dialogs } from './components/dialogs/Dialogs';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <NavBar/>
        <div className='app-wrapper-content'>
            <Route path={PATH.DIALOGS} component={Dialogs}/>
            <Route path={PATH.PROFILE} component={Profile}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
