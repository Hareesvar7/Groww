import React from 'react';

const HoldingItem = ({ holding }) => {
  const { name, shares, invested, current } = holding;
  const profitLoss = current - invested;

  return (
    <div className="holding-item">
      <div className="holding-details">
        <h3>{name}</h3>
        <p>{shares} shares</p>
      </div>
      <div className="holding-values">
        <p>Invested: ₹{invested.toLocaleString()}</p>
        <p>Current: ₹{current.toLocaleString()}</p>
        <p style={{ color: profitLoss >= 0 ? 'green' : 'red' }}>
          Profit/Loss: ₹{profitLoss.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default HoldingItem;
