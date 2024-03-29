import { createSlice } from "@reduxjs/toolkit";
import { LIVE_COUNT_MESSAGE } from "../Constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages.splice(LIVE_COUNT_MESSAGE, 1);
      state.messages.unshift(action.payload);
    },
  },
});
export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;
