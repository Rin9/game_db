import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASEURL;
const API_KEY = process.env.REACT_APP_APIKEY;

const initialState = [];

export const fetchGames = createAsyncThunk("games/fetchGames", async () => {
  const res = await axios.get(
    `${BASE_URL}/games?key=${API_KEY}&page=1&page_size=20`
  );
  return res.data;
});

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

//get all game infos
export const getAllGames = (state) => state.games;

//get game info by id
export const getGameById = (state, gameId) => {
  return state.games?.results?.find((game) => {
    console.log(game);
    return game.id === gameId;
  });
};

export default gamesSlice.reducer;
