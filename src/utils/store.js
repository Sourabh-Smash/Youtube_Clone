import { configureStore } from "@reduxjs/toolkit";
import homeVideoSlice from "./homeVideoSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import recomendSearchSlice from "./recomendSearchSlice";
import selectContainerSlice from "./selectContainerSlice";
const store = configureStore({
  reducer: {
    app: homeVideoSlice,
    search: searchSlice,
    chat: chatSlice,
    recomendSearch: recomendSearchSlice,
    selectContainer:selectContainerSlice,
  },
});

export default store;
