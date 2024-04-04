import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <NavBar/>
      <Profile/>
    </div>
  );
}

export default App;
