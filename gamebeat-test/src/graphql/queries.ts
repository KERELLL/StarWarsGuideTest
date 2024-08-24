import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query Query {
    allPeople {
      people {
        name
        id
        gender
        birthYear
        filmConnection {
          films {
            title
            id
            director
            created
          }
        }
        homeworld {
          name
        }
        created
        skinColor
      }
      totalCount
    }
  }
`;

export const GET_CHARACTER = gql`
  query Query($personId: ID) {
    person(id: $personId) {
      birthYear
      created
      gender
      name
      id
      skinColor
      homeworld {
        name
      }
      filmConnection {
        films {
          title
          id
          director
          created
        }
      }
    }
  }
`;
