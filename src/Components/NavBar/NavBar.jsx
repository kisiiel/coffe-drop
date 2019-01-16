import React from 'react';
import Menu from '../Menu';

import Logo from '../../assets/logo.svg';

import './NavBar.scss'

const NavBar = () => {
  return (
    <div className="NavBar">
      <img className="NavBar__logo" src={Logo} alt="CoffeDrop"/>
      <Menu/>
    </div>
   );
}

export default NavBar;