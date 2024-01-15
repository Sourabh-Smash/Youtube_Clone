import { createSlice } from "@reduxjs/toolkit";

const recomendSearchSlice = createSlice({
  name: "recomendSearch",
  initialState: {
    item: null,
  },
  reducers: {
    clickOption: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const { clickOption } = recomendSearchSlice.actions;
export default recomendSearchSlice.reducer;
