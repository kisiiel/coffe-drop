import React from 'react'
import MenuButton from '../../assets/hamburgermenu.svg';
import './Menu.scss';

const Menu = () => {
  return (
    <>
      <button className="Menu__button"><img className="Menu__buttonIcon" src={MenuButton} alt="Show menu"/></button>
      <ul className="Menu">
        <li className="Menu__item">Login</li>
        <li className="Menu__item">Download IOS App</li>
        <li className="Menu__item">Download Android App</li>
      </ul>
    </>

  );
}

export default Menu;