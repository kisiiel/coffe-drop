import React, { Component } from 'react';

import './CoffeDrop.scss';
import Hero from './Components/Hero';
import HowItWorksSection from './Components/HowItWorksSection/HowItWorksSection';

class CoffeDrop extends Component {
  render() {
    return (
      <div className="CoffeDrop">
        <Hero />
        <HowItWorksSection />
      </div>
    );
  }
}

export default CoffeDrop;
