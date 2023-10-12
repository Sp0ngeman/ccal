import React, { Component } from 'react';
import Chessboard from 'chessboardjsx'; // Assuming you're using chessboardjsx library
import Chess from 'chess.js';

class ChessboardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: 'start', // Initial position
      game: new Chess(), // Chess.js instance
    };
  }

  // Function to handle user moves
  handleMove = (move) => {
    // Check if the move is legal
    const legalMove = this.state.game.move(move);

    // If the move is legal, update the board
    if (legalMove !== null) {
      this.setState({
        board: this.state.game.fen(),
      });
    }
  };

  // Reset the chessboard to the initial position
  resetBoard = () => {
    this.setState({
      board: 'start',
      game: new Chess(),
    });
  };

  render() {
    return (
      <div>
        {/* Chessboard component */}
        <Chessboard
          position={this.state.board}
          onDrop={(move) => this.handleMove({ from: move.sourceSquare, to: move.targetSquare, promotion: 'q' })}
        />

        {/* Reset button */}
        <button onClick={this.resetBoard}>Reset Board</button>
      </div>
    );
  }
}

export default ChessboardComponent;
