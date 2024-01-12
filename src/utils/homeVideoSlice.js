import { createSlice } from "@reduxjs/toolkit";

const homeVideoSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});
export const { toggleMenu } = homeVideoSlice.actions;
export default homeVideoSlice.reducer;