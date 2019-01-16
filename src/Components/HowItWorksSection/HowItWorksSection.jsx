import React from 'react'

import IconOne from '../../assets/icon-1.svg';
import IconTwo from '../../assets/icon-2.svg';
import IconThree from '../../assets/icon-3.svg';
import Arrow from '../../assets/arrow.svg';

import './HowItWorksSection.scss';

const HowItWorksSection = () => (
  <section className="HowItWorksSection">
    <h2 className="HowItWorksSection__header">How It Works</h2>
    <div className="HowItWorksSection__steps">

      <div className="HowItWorksSection__step">
        <img src={IconOne} alt="First Step"/>
        <p>You can now save the planet in style, thanks to cashback for your nespresso pods at any of our sixteen locations nationwide.</p>
      </div>

      <img src={Arrow} alt="Go to next step"/>

      <div className="HowItWorksSection__step">
        <img src={IconTwo} alt="First Step"/>
        <p>You can now save the planet in style, thanks to cashback for your nespresso pods at any of our sixteen locations nationwide.</p>
      </div>

      <img src={Arrow} alt="Go to next step"/>

      <div className="HowItWorksSection__step">
        <img src={IconThree} alt="First Step"/>
        <p>You can now save the planet in style, thanks to cashback for your nespresso pods at any of our sixteen locations nationwide.</p>
      </div>

    </div>
  </section>
);

export default HowItWorksSection;