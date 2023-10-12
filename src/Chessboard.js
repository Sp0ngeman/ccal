import React from 'react';
import './Chessboard.css';

const Chessboard = ({ game }) => {
  // Logic to render the chessboard squares and pieces based on the game state
  // ...

  return (
    <div className={`chessboard ${game.isGameOver ? 'dark-mode' : ''}`}>
      {/* Chessboard rendering logic */}
    </div>
  );
};

export default Chessboard;
  