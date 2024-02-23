import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
  isRegistered: false,
  email: "",
  password: "",
  next: true,
  prev: false,
};

export const signinSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    onNext(state = initialState, action) {
      const { email, isRegistered } = action.payload;
      state.email = email;
      state.isRegistered = isRegistered;
      state.step = 1;
    },
    onClear(state = initialState, action) {
      state = {
        step: 0,
        isRegistered: false,
        email: "",
        password: "",
        next: true,
        prev: false,
      };
    },
  },
});

export const signinActions = { ...signinSlice.actions };
export default signinSlice.reducer;
