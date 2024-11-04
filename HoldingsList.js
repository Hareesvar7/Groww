import React from 'react';
import HoldingItem from './HoldingItem';

const HoldingsList = ({ holdings }) => {
  return (
    <div className="holdings-list">
      {holdings.map((holding, index) => (
        <HoldingItem key={index} holding={holding} />
      ))}
    </div>
  );
};

export default HoldingsList;
