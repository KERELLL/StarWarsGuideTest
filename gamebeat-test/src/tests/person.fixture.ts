import { TPerson } from "../types/character.type";

export const singleCharacter: TPerson = {
  name: "Luke Skywalker",
  id: "cGVvcGxlOjE=",
  gender: "male",
  birthYear: "19BBY",
  created: "2014-12-09T13:50:51.644000Z",
  skinColor: "fair",
  homeworld: {
    name: "Tatooine",
  },
  filmConnection: {
    films: [
      {
        title: "A New Hope",
        id: "ZmlsbXM6MQ==",
        director: "George Lucas",
        created: "2014-12-10T14:23:31.880000Z",
      },
    ],
  },
};

export const characterList: TPerson[] = [
  {
    name: "Luke Skywalker",
    id: "cGVvcGxlOjE=",
    gender: "male",
    birthYear: "19BBY",
    created: "2014-12-09T13:50:51.644000Z",
    skinColor: "fair",
    homeworld: {
      name: "Tatooine",
    },
    filmConnection: {
      films: [
        {
          title: "A New Hope",
          id: "ZmlsbXM6MQ==",
          director: "George Lucas",
          created: "2014-12-10T14:23:31.880000Z",
        },
      ],
    },
  },
  {
    name: "Arvel Crynyd",
    id: "cGVvcGxlOjI5",
    gender: "male",
    birthYear: "unknown",
    filmConnection: {
      films: [
        {
          title: "Return of the Jedi",
          id: "ZmlsbXM6Mw==",
          director: "Richard Marquand",
          created: "2014-12-18T10:39:33.255000Z",
        },
      ],
    },

    homeworld: {
      name: "unknown",
    },
    created: "2014-12-18T11:16:33.020000Z",
    skinColor: "fair",
  },
  {
    name: "Wicket Systri Warrick",
    id: "cGVvcGxlOjMw",
    gender: "male",
    birthYear: "8BBY",
    filmConnection: {
      films: [
        {
          title: "Return of the Jedi",
          id: "ZmlsbXM6Mw==",
          director: "Richard Marquand",
          created: "2014-12-18T10:39:33.255000Z",
        },
      ],
    },
    homeworld: {
      name: "Endor",
    },
    created: "2014-12-18T11:21:58.954000Z",
    skinColor: "brown",
  },
  {
    name: "Nien Nunb",
    id: "cGVvcGxlOjMx",
    gender: "male",
    birthYear: "unknown",
    filmConnection: {
      films: [
        {
          title: "Return of the Jedi",
          id: "ZmlsbXM6Mw==",
          director: "Richard Marquand",
          created: "2014-12-18T10:39:33.255000Z",
        },
      ],
    },
    homeworld: {
      name: "Sullust",
    },
    created: "2014-12-18T11:26:18.541000Z",
    skinColor: "grey",
  },
];
