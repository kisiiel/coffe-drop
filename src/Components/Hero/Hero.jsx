import React from 'react'

import './Hero.scss'
import appStore from '../../assets/app-store@2x.png';
import googlePlay from '../../assets/google-play@2x.png';
import appMockup from '../../assets/app-mockup@2x.png';
import NavBar from '../NavBar/NavBar';

const  Hero = () => (
  <header className="Hero__wrap">
    <NavBar />
    <div className="Hero">
      <div className="Hero__welcome">
        <h1 className="Hero__header">Recycle your Nespresso in style!</h1>
        <p className="Hero__text">We can recycle your coffee pods for cashback or free coffee!</p>

        <div className="Hero__downloadButtons">
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
        </div>
      </div>
      <div className="Hero__appMockupWrap">
        <img
          className="Hero__appMockup"
          src={appMockup}
          alt="CoffeDrop App"
        />
      </div>
    </div>
  </header>
);

export default  Hero;