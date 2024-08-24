import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TFilterState, TFiltersActionsPayload } from "types/filter.type";

const initialState: TFilterState = {
  queryParams: {
    filmTitles: [],
    genders: [],
    page: "1",
  },
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateListQueryParam: (
      state,
      action: PayloadAction<TFiltersActionsPayload>
    ) => {
      const { key, value } = action.payload;
      if (key === "filmTitles" || key === "genders") {
        if (state.queryParams[key].find((name) => name === value)) {
          state.queryParams[key] = state.queryParams[key].filter(
            (name) => name !== value
          );
        } else {
          state.queryParams[key].push(value);
        }
      } else {
        state.queryParams[key] = value as string;
      }
    },
  },
});

export const { updateListQueryParam } = filtersSlice.actions;

export const selectFilters = (state: RootState) => state.filters;

export default filtersSlice.reducer;
