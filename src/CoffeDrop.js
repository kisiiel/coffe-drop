import React, { Component } from 'react';

import './CoffeDrop.scss';
import Hero from './Components/Hero';
import HowItWorksSection from './Components/HowItWorksSection/HowItWorksSection';
import PricesSection from './Components/PricesSection/PricesSection';
import MapSection from './Components/MapSection/MapSection';

class CoffeDrop extends Component {
  render() {
    return (
      <div className="CoffeDrop">
        <Hero />
        <HowItWorksSection />
        <PricesSection />
        <MapSection/>
      </div>
    );
  }
}

export default CoffeDrop;
