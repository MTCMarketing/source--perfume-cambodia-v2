import React from 'react';
import { FaStar, FaListUl, FaExchangeAlt, FaAward } from 'react-icons/fa';
import './PromiseSection.css';

const PromiseSection: React.FC = () => {
  const features = [
    {
      icon: FaStar,
      title: 'Best-in-class refurbishment'
    },
    {
      icon: FaListUl,
      title: '25-point quality inspection'
    },
    {
      icon: FaExchangeAlt,
      title: 'Free returns until Jan 31'
    },
    {
      icon: FaAward,
      title: '1-year warranty'
    }
  ];

  return (
    <section className="promise-strip">
      <div className="promise-heading">
        <h2>Your Best Fragrance Deals, Guaranteed</h2>
      </div>
      <div className="promise-strip-container">
        {features.map((feature, index) => (
          <div className="promise-item" key={index}>
            <span className="promise-icon">
              <feature.icon />
            </span>
            <span className="promise-text">{feature.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromiseSection;
