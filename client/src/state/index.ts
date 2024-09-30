import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

const initialState: InitialState = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSideBarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsSideBarCollapsed, setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;
