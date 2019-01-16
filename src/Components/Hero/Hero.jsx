import React from 'react'

import './Hero.scss'
import appStore from '../../assets/app-store@2x.png';
import googlePlay from '../../assets/google-play@2x.png';
import appMockup from '../../assets/app-mockup@2x.png';
import NavBar from '../NavBar/NavBar';

const  Hero = () => (
  <div className="Hero__wrap">
    <div className="Hero">
      <NavBar />
      <h1 className="Hero__header">Recycle your Nespresso in style!</h1>
      <p className="Hero__text">We can recycle your coffee pods for cashback or free coffee!</p>

      <img
        className="Hero__appStoreButton"
        src={appStore}
        alt="AppStore app download"
      />
      <img
        className="Hero__googlePlayButton"
        src={googlePlay}
        alt="AppStore app download"
      />
      <img
        className="Hero__appMockup"
        src={appMockup}
        alt="CoffeDrop App"
      />
    </div>
  </div>
);

export default  Hero;