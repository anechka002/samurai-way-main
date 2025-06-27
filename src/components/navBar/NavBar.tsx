import React from 'react';
import s from './NavBar.module.css'
import { NavLink } from 'react-router-dom';

export const PATH = {
  PROFILE: "/profile",
  DIALOGS: "/dialogs",
  NEWS: "/news",
  MUSIC: "/music",
  SETTINGS: "/settings",
  NOTFOUND: '*',
} as const

function NavBar() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to={PATH.PROFILE} className = {navDate => navDate ? s.active : s.item }>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={PATH.DIALOGS} className = {navDate => navDate ? s.active : s.item }>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={PATH.NEWS} className={navDate => navDate? s.active : s.item}>News</NavLink>
      </div>
      <div className={s.item}>
      <NavLink to={PATH.MUSIC} className={navDate => navDate? s.active : s.item}>Music</NavLink>
      </div>
      <div className={s.item}>
      <NavLink to={PATH.SETTINGS} className={navDate => navDate? s.active : s.item}>Settings</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
