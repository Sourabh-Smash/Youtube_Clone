import { createSlice } from "@reduxjs/toolkit";

const homeVideoSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    removeMenu: (state) => {
      state.isMenuOpen = false;
    }
  },
});
export const { toggleMenu,removeMenu } = homeVideoSlice.actions;
export default homeVideoSlice.reducer;