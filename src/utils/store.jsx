import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";

//pt

const store = configureStore({
  reducer: {
    app: appSlice, //putting appslice
    search: searchSlice,
  },
});

export default store;
