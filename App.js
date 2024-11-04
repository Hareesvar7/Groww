import React from "react";
import { holdingsData } from "./data/holdingsData";
import "./styles.css";

function App() {
  const totalInvested = holdingsData.reduce((sum, holding) => sum + holding.invested, 0);
  const totalCurrent = holdingsData.reduce((sum, holding) => sum + holding.current, 0);
  const totalProfitLoss = totalCurrent - totalInvested;

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo">Groww Clone</div>
        <div className="profile-pic" />
      </header>

      {/* Investment Summary */}
      <div className="investment-summary">
        <div>
          <div className="amount">₹{totalInvested.toLocaleString()}</div>
          <div className="label">Invested</div>
        </div>
        <div>
          <div className="amount">₹{totalCurrent.toLocaleString()}</div>
          <div className="label">Current</div>
        </div>
        <div>
          <div className="amount" style={{ color: totalProfitLoss >= 0 ? "green" : "red" }}>
            ₹{totalProfitLoss.toLocaleString()}
          </div>
          <div className="label">Total Returns</div>
        </div>
      </div>

      {/* Holdings List */}
      <div className="holdings-list">
        {holdingsData.map((holding, index) => (
          <div key={index} className="holding-item">
            <div className="details">
              <div className="name">{holding.name}</div>
              <div className="shares">{holding.shares} shares</div>
            </div>
            <div className="amount">
              <div className="current-value">₹{holding.current.toLocaleString()}</div>
              <div className="invested-value">(₹{holding.invested.toLocaleString()})</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
