import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  player1TotalScore: 0,
  player2TotalScore: 0,
  activePlayer: 1,
  dice: Math.trunc(Math.random() * 6) + 1,
  // playing, complete, reset
  gameStatus: "reset",
};

const gameSlice = createSlice({ name: "game", initialState, reducers: {} });

export default gameSlice.reducer;
