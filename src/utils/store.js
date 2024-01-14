import { configureStore } from "@reduxjs/toolkit";
import homeVideoSlice from "./homeVideoSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
const store = configureStore({
  reducer: {
    app: homeVideoSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store; 
