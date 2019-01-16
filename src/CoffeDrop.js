import React, { Component } from 'react';

import './CoffeDrop.scss';
import Hero from './Components/Hero';
import HowItWorksSection from './Components/HowItWorksSection/HowItWorksSection';
import PricesSection from './Components/PricesSection/PricesSection';
import MapSection from './Components/MapSection/MapSection';
import Footer from './Components/Footer/Footer';

class CoffeDrop extends Component {
  render() {
    return (
      <div className="CoffeDrop">
        <Hero />
        <HowItWorksSection />
        <PricesSection />
        <MapSection/>
        <Footer />
      </div>
    );
  }
}

export default CoffeDrop;
