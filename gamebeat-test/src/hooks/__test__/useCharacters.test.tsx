import { MockedProvider } from "@apollo/client/testing";
import { useCharactersFilter } from "@hooks/useCharactersFilter";
import { renderHook } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { characterList } from "../../tests/person.fixture";
import { renderWithProviders } from "../../tests/test-utils";
import { describe, expect, it } from "vitest";
import { TFilter } from "types/filter.type";

const createWrapper = (filters: TFilter) =>
  renderWithProviders(
    <MemoryRouter>
      <MockedProvider></MockedProvider>
    </MemoryRouter>,
    {
      preloadedState: {
        filters: {
          queryParams: filters,
        },
      },
    }
  ).Wrapper;

describe("useCharactersFilter Hook", () => {
  it("Should handle multiple filters correctly", async () => {
    const component = createWrapper({
      filmTitles: ["A New Hope"],
      genders: ["male"],
    });

    const testData = characterList;
    const { result } = renderHook(
      () => {
        const { characterList } = useCharactersFilter(testData);
        return characterList;
      },
      { wrapper: component }
    );

    expect(result.current).toBeDefined();
    expect(result.current[0].name).toEqual("Luke Skywalker");
  });

  it("Should return the full list when no filters are applied", async () => {
    const component = createWrapper({
      filmTitles: [],
      genders: [],
    });

    const testData = characterList;
    const { result } = renderHook(
      () => {
        const { characterList } = useCharactersFilter(testData);
        return characterList;
      },
      { wrapper: component }
    );

    expect(result.current).toBeDefined();
    expect(result.current.length).toEqual(testData.length);
  });
});
