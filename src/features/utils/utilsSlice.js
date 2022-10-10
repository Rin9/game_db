import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
};

const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    addHistory(state, action) {
      state.history.push(action.payload);
    },
  },
});

export const getHistory = (state) => state.history;

export const { addHistory } = utilsSlice.actions;

export default utilsSlice.reducer;
