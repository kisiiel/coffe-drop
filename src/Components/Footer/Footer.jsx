import React from 'react'

import Logo from '../../assets/logo.svg';
import './Footer.scss';

const Footer = () => {
  return ( <footer className="Footer">
    <p>This app is powered by</p>
    <img src={Logo} alt="CoffeDrop" className="footer__logo"/>
  </footer> );
}

export default Footer;