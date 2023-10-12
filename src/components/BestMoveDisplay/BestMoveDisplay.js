import React, { useState } from 'react';
import './BestMoveDisplay.css';

const BestMoveDisplay = ({ bestMove, onCalculateBestMove }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCalculateBestMove = () => {
    setIsLoading(true);
    // Simulate an API call or move calculation logic here
    setTimeout(() => {
      onCalculateBestMove();
      setIsLoading(false);
    }, 1500); // Simulating a delay of 1.5 seconds for demonstration
  };

  return (
    <div className={`best-move-container ${isLoading ? 'dark-mode' : ''}`}>
      <button className={`best-move-button ${isLoading ? 'dark-mode' : ''}`} onClick={handleCalculateBestMove} disabled={isLoading}>
        {isLoading ? 'Calculating...' : 'Calculate Best Move'}
      </button>
      {bestMove && !isLoading && <p className="best-move-result">{`Best Move: ${bestMove}`}</p>}
      {isLoading && <p className="loading-message">Calculating the best move...</p>}
    </div>
  );
};

export default BestMoveDisplay;
