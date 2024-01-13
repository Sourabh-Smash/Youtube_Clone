import { configureStore } from "@reduxjs/toolkit";
import homeVideoSlice from "./homeVideoSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: homeVideoSlice,
    search:searchSlice,
  },
});

export default store;
