import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers";
const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
