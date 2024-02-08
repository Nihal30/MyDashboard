import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebarOpen: false,
  },
  reducers: {
    toggleSideBar: (state, action) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const {toggleSideBar} = appSlice.actions
export default appSlice.reducer
