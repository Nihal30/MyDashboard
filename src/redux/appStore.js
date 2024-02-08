import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slice/appSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default appStore;
