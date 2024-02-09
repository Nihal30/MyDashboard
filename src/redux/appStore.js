import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slice/appSlice";
import weatherSlice from "./slice/weatherSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
    weather :weatherSlice,
  },
});

export default appStore;
