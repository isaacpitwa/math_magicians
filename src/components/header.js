import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css';

function Header() {
  return (
    <header>
      <h3>Math Magicians</h3>
      <nav className={style.navlist}>
        <li className={style.navlink}><NavLink to="/" exact>Home</NavLink></li>
        <li className={style.navlink}><NavLink to="/calculator" exact>Calculator</NavLink></li>
        <li className={style.navlink}><NavLink to="/quote" exact>Quote</NavLink></li>
      </nav>
    </header>
  );
}
export default Header;
