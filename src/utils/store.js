import { configureStore } from "@reduxjs/toolkit";
import homeVideoSlice from "./homeVideoSlice";

const store = configureStore({
  reducer: {
    app: homeVideoSlice,
  },
});

export default store;
