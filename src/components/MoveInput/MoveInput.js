import React, { useState } from 'react';
import './MoveInput.css';

const MoveInput = ({ onMoveSubmit, disabled }) => {
  const [move, setMove] = useState('');

  const handleInputChange = (e) => {
    setMove(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (move.trim() !== '' && !disabled) {
      onMoveSubmit(move);
      setMove('');
    }
  };

  return (
    <form className={`move-input-container ${disabled ? 'dark-mode' : ''}`} onSubmit={handleSubmit}>
      <input
        type="text"
        className={`move-input-field ${disabled ? 'dark-mode' : ''}`}
        placeholder="Enter your move"
        value={move}
        onChange={handleInputChange}
        disabled={disabled}
      />
      <button type="submit" className={`move-submit-button ${disabled ? 'dark-mode' : ''}`} disabled={disabled}>
        Submit
      </button>
    </form>
  );
};

export default MoveInput;
