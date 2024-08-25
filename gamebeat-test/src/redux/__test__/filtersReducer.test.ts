import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import filterReducer, { updateListQueryParam } from "@redux/filtersSlice";
import { TFilterState } from "types/filter.type";
describe("Filter Reducer", () => {
  const initialState: TFilterState = {
    queryParams: {
      filmTitles: [],
      genders: [],
    },
  };
  it("Should add a film title to 'filmTitles'", async () => {
    const action = updateListQueryParam({
      key: "filmTitles",
      value: "A New Hope",
    });
    const expectedState = {
      queryParams: {
        ...initialState.queryParams,
        filmTitles: ["A New Hope"],
      },
    };

    expect(filterReducer(initialState, action)).toEqual(expectedState);
  });
  it("Should remove a film title from 'filmTitles'", async () => {
    const initialStateWithFilm = {
      ...initialState,
      queryParams: { ...initialState.queryParams, filmTitles: ["A New Hope"] },
    };
    const action = updateListQueryParam({
      key: "filmTitles",
      value: "A New Hope",
    });
    const expectedState = {
      queryParams: {
        ...initialState.queryParams,
        filmTitles: [],
      },
    };

    expect(filterReducer(initialStateWithFilm, action)).toEqual(expectedState);
  });

  it("Should not change state when an empty string is added to 'filmTitles'", async () => {
    const initialStateWithFilm = {
      ...initialState,
      queryParams: { ...initialState.queryParams, filmTitles: [] },
    };
    const action = updateListQueryParam({
      key: "filmTitles",
      value: "",
    });
    const expectedState = {
      queryParams: {
        ...initialState.queryParams,
        filmTitles: [],
      },
    };

    expect(filterReducer(initialStateWithFilm, action)).toEqual(expectedState);
  });
});
