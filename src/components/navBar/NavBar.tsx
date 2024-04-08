import React from 'react';
import s from './NavBar.module.css'
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to={'/profile'} className = {navDate => navDate ? s.active : s.item }>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/dialogs'} className = {navDate => navDate ? s.active : s.item }>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/news'} className={navDate => navDate? s.active : s.item}>News</NavLink>
      </div>
      <div className={s.item}>
      <NavLink to={'/music'} className={navDate => navDate? s.active : s.item}>Music</NavLink>
      </div>
      <div className={s.item}>
      <NavLink to={'/settings'} className={navDate => navDate? s.active : s.item}>Settings</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
