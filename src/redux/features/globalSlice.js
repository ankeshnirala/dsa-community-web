import { createSlice } from "@reduxjs/toolkit";

const name = "globalStore";
const initialState = createInitialState();
const reducers = createReducers();
const slice = createSlice({ name, initialState, reducers });

export const globalActions = { ...slice.actions };
export default slice.reducer;

function createInitialState() {
  return {
    constants: {
      button: "Join Us",
    },
  };
}

function createReducers() {
  return {};
}
