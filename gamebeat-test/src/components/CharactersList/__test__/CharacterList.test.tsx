import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../../tests/test-utils";
import { describe, expect, it } from "vitest";
import CharacterList from "../CharacterList";
import { TGetCharactersQuery } from "../../../types";
import { GET_CHARACTERS } from "../../../graphql/queries";
import { singleCharacter } from "../../../tests/person.fixture";
import { ApolloError } from "@apollo/client";

const mocks: TGetCharactersQuery = {
  allPeople: {
    totalCount: 1,
    people: [singleCharacter],
  },
};
const successGetCharactersMock: MockedResponse[] = [
  {
    request: { query: GET_CHARACTERS },
    result: {
      data: mocks,
    },
  },
];

const loadingGetCharactersMock: MockedResponse[] = [
  {
    delay: 30,
    request: { query: GET_CHARACTERS },
    result: {
      data: mocks,
    },
  },
];

const errorGetCharactersMock: MockedResponse[] = [
  {
    request: { query: GET_CHARACTERS },
    error: new ApolloError({ errorMessage: "Invalid data!" }),
    result: {
      errors: [
        {
          message: "Invalid data!",
        },
      ],
    },
  },
];

const Wrapper = ({ children, mocks }) => {
  return (
    <MemoryRouter>
      <MockedProvider mocks={mocks} addTypename={false}>
        {children}
      </MockedProvider>
    </MemoryRouter>
  );
};

describe("CharacterList Component", () => {
  it("Should display error message when the query fails", async () => {
    const component = renderWithProviders(
      <Wrapper mocks={errorGetCharactersMock}>
        <CharacterList />
      </Wrapper>
    );
    expect(await component.findByTestId("characterListError")).toBeDefined();
  });
  it("Should render character list when data is fetched successfully", async () => {
    const component = renderWithProviders(
      <Wrapper mocks={successGetCharactersMock}>
        <CharacterList />
      </Wrapper>
    );
    expect(await component.findByTestId("characterListSuccess")).toBeDefined();
  });
  it("Should render character list loader", async () => {
    const component = renderWithProviders(
      <Wrapper mocks={loadingGetCharactersMock}>
        <CharacterList />
      </Wrapper>
    );
    expect(await component.findByTestId("characterListLoading")).toBeDefined();
  });
});
