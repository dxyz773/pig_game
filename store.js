import { configureStore } from "@reduxjs/toolkit";
import gameSliceReducer from "./src/game_features/gameSlice";

const store = configureStore({ reducer: { game: gameSliceReducer } });

export default store;
