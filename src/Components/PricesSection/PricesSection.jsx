import React from 'react'
import PriceTable from '../PriceTable';

import './PricesSection.scss';

const PricesSection = () => {
  return (
    <section className="PricesSection">

      <h2 className="PricesSection__header">Prices</h2>
      <div className="PricesSection__tables">
        <PriceTable
          title="The first 50 capsules:"
          rows={[
            'Ristretto = 2p',
            'Espresso = 4p',
            'Lungo = 6p',
          ]}
        />

        <PriceTable
          title="Capsules 50-500:"
          rows={[
            'Ristretto = 3p',
            'Espresso = 6p',
            'Lungo = 9p',
          ]}
        />

        <PriceTable
          title="Capsules 501+:"
          rows={[
            'Ristretto = 5p',
            'Espresso = 10p',
            'Lungo = 15p',
          ]}
        />
      </div>
    </section>
   );
}

export default PricesSection