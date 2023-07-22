import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    flag: "auto"
  },
  reducers: {
    toggle(state) {
      state.flag = state.flag === "auto" ? "none" : "auto";
      return state;
    }
  }
});

export const { toggle } = checkoutSlice.actions;

export default checkoutSlice.reducer;
