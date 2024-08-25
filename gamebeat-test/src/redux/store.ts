import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import filterSlice from "./filtersSlice";

const rootReducer = combineReducers({
  app: appSlice,
  filters: filterSlice,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
