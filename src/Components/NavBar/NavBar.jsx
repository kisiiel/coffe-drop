import React from 'react';
import Menu from '../Menu';

import Logo from '../../assets/logo.svg';

import './NavBar.scss'

const NavBar = () => {
  return (
    <nav className="NavBar">
      <img className="NavBar__logo" src={Logo} alt="CoffeDrop"/>
      <Menu/>
    </nav>
   );
}

export default NavBar;