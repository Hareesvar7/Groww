import React from 'react';
import HoldingsList from './HoldingsList';
import { holdingsData } from '../data/holdingsData';

function Dashboard() {
  const totalInvested = holdingsData.reduce((sum, holding) => sum + holding.invested, 0);
  const totalCurrent = holdingsData.reduce((sum, holding) => sum + holding.current, 0);
  const totalProfitLoss = totalCurrent - totalInvested;

  return (
    <div className="dashboard">
      <div className="summary">
        <div className="summary-item">
          <h3>Invested</h3>
          <p>₹{totalInvested.toLocaleString()}</p>
        </div>
        <div className="summary-item">
          <h3>Current</h3>
          <p>₹{totalCurrent.toLocaleString()}</p>
        </div>
        <div className="summary-item">
          <h3>Total Returns</h3>
          <p style={{ color: totalProfitLoss >= 0 ? 'green' : 'red' }}>
            ₹{totalProfitLoss.toLocaleString()}
          </p>
        </div>
      </div>
      <HoldingsList holdings={holdingsData} />
    </div>
  );
}

export default Dashboard;
