import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import { storage } from "../helpers/functions";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  theme: (storage.get("theme") || "dark") as "dark" | "light",
};

export type AppInitialStateType = typeof initialState;

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      storage.set("theme", action.payload);
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
