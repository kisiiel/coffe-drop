import React from 'react'
import BeansIcon from '../../assets/coffee-beans.svg';
import './PriceTable.scss';

const PriceTable = ({ rows, title }) => {
  return (
  <div className="PriceTable">
    <div className="PriceTable__title">{title}</div>
      <ul className="PriceTable__list">
        {
          rows.map(row => <li>{row}</li>)
        }
        <img
          className="PriceTable__beansIcon"
          src={BeansIcon}
          alt="Beans"
        />
      </ul>
  </div> );
}

export default PriceTable;