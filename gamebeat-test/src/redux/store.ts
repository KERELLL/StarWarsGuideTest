import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import { useDispatch, useSelector } from "react-redux";
import filterSlice from "./filtersSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    filters: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
