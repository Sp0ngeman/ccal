import Chess from 'chess.js';

// Function to create a new chess game instance
export function createChessGame() {
  return new Chess();
}

// Function to validate and apply a move to the chess game
export function applyMove(game, move) {
  const legalMove = game.move(move);
  return legalMove !== null;
}

// Function to get the current game state as FEN (Forsyth-Edwards Notation)
export function getFen(game) {
  return game.fen();
}

// Function to check if the game is over (checkmate or stalemate)
export function isGameOver(game) {
  return game.in_checkmate() || game.in_draw() || game.in_stalemate() || game.in_threefold_repetition();
}
