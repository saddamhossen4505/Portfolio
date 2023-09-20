import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice.js";

// Create Store.
export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
  devTools: true,
});
