import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css';

function Header() {
  return (
    <header>
      <h3><NavLink to="/" exact="true">Math Magicians</NavLink></h3>
      <nav className={style.navlist}>
        <li className={style.navlink}><NavLink to="/" exact="true">Home</NavLink></li>
        <li className={style.navlink}><NavLink to="/calculator" exact="true">Calculator</NavLink></li>
        <li className={style.navlink}><NavLink to="/quote" exact="true">Quote</NavLink></li>
      </nav>
    </header>
  );
}
export default Header;
