import { createSlice } from "@reduxjs/toolkit";

const transparentBgSlice = createSlice({
  name: "transparentBg",
  initialState: {
    bg: false,
  },
  reducers: {
    changeBg: (state) => {
      state.bg = !state.bg;
    },
  },
});

export const { changeBg } = transparentBgSlice.actions;
export default transparentBgSlice.reducer;
