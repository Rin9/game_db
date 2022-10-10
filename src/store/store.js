import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../features/games/gamesSlice";
// import utilsReducer from "../features/utils/utilsSlice";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
  },
});
