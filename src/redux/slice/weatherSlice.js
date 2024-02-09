import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "Weather",
  initialState: {
    WeatherData: null,
  },
  reducers: {
    addWeatherResponse: (state, action) => {
      state.WeatherData = action.payload;
    },
  },
});


export const {addWeatherResponse } = weatherSlice.actions 
export default weatherSlice.reducer
