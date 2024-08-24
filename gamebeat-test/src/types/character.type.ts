export interface TGetCharactersQuery {
  allPeople: TAllPeople;
}

export interface TAllPeople {
  people: TPerson[];
  totalCount: number;
}

export interface TGetCharacterQuery {
  person: TPerson;
}

export interface TPerson {
  name: string;
  id: string;
  gender: string;
  birthYear: string;
  filmConnection: TFilmConnection;
  homeworld: THomeworld;
  created: string;
  skinColor: string;
}

export interface TFilmConnection {
  films: TFilm[];
}

export interface TFilm {
  title: string;
  id: string;
  director: string;
  created: string;
}

export interface THomeworld {
  name: string;
}
