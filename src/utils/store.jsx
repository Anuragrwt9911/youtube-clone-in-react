import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

//pt

const store = configureStore({
  reducer: {
    app: appSlice, //putting appslice
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
