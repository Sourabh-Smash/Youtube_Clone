import { createSlice } from "@reduxjs/toolkit";

const selectContainerSlice = createSlice({
  name: "selectContainer",
  initialState: {
    toggle: true,
  },
  reducers: {
    toggleContainer: (state) => {
      state.toggle = false;
    },
  },
});
export const { toggleContainer } = selectContainerSlice.actions;
export default selectContainerSlice.reducer;
