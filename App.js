import React, { useState } from "react";
import { holdingsData } from "./data/holdingsData";
import "./styles.css";

function App() {
  const [sortedData, setSortedData] = useState(holdingsData);
  const totalInvested = holdingsData.reduce((sum, holding) => sum + holding.invested, 0);
  const totalCurrent = holdingsData.reduce((sum, holding) => sum + holding.current, 0);
  const totalProfitLoss = totalCurrent - totalInvested;

  const handleSort = () => {
    const sorted = [...sortedData].sort((a, b) => b.current - a.current);
    setSortedData(sorted);
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">Groww Clone</div>
        <div className="profile-pic" />
      </header>

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
          <div
            className="amount"
            style={{ color: totalProfitLoss >= 0 ? "#4caf50" : "#f44336" }}
          >
            ₹{totalProfitLoss.toLocaleString()}
          </div>
          <div className="label">Total Returns</div>
        </div>
      </div>

      <button onClick={handleSort} style={{ margin: "10px 0" }}>Sort by Current Value</button>

      <div className="holdings-list">
        {sortedData.map((holding, index) => (
          <div key={index} className="holding-item">
            <div className="details">
              <div className="name">{holding.name}</div>
              <div className="shares">{holding.shares} shares</div>
            </div>
            <div className="amount">
              <div
                className={`current-value ${holding.current > holding.invested ? "green" : "red"}`}
              >
                ₹{holding.current.toLocaleString()}
              </div>
              <div className="invested-value">(₹{holding.invested.toLocaleString()})</div>
            </div>
            <div className={`graph ${holding.current > holding.invested ? "up-graph" : "down-graph"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
