import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  player1TotalScore: 0,
  player2TotalScore: 0,
  activePlayer: 1,
  dice: Math.trunc(Math.random() * 6) + 1,
  activeScore: 0,
  // playing, complete, reset
  gameStatus: "reset",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    reset(state) {
      state.player1TotalScore = 0;
      state.player2TotalScore = 0;
      state.activeScore = 0;
      state.activePlayer = 1;
      state.dice = Math.trunc(Math.random() * 6) + 1;
      state.gameStatus = "reset";
    },
    rollDice(state) {
      if (state.gameStatus === "reset") {
        state.gameStatus = "playing";
      }
      state.dice = Math.trunc(Math.random() * 6) + 1;
      if (state.dice !== 1) {
        state.activeScore += state.dice;
      } else if (state.dice === 1) {
        state.activeScore = 0;
        state.activePlayer = state.activePlayer === 1 ? 2 : 1;
      }
    },
    addCurrentScoreToTotalScore(state) {
      state[`player${state.activePlayer}TotalScore`] += state.activeScore;
      if (state[`player${state.activePlayer}TotalScore`] < 100) {
        state.activeScore = 0;
        state.activePlayer = state.activePlayer === 1 ? 2 : 1;
      } else if (state[`player${state.activePlayer}TotalScore`] >= 100) {
        state.gameStatus = "complete";
      }
    },
  },
});

export default gameSlice.reducer;
export const { rollDice, reset, addCurrentScoreToTotalScore } =
  gameSlice.actions;
