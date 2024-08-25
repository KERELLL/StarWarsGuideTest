import { useEffect, useState } from "react";
import { TPerson } from "types";
import { useAppSelector } from "./useAppSelector";

export const useCharactersFilter = (data: TPerson[]) => {
  const [characterList, setCharacterList] = useState<TPerson[]>(null);

  const filters = useAppSelector((state) => state.filters.queryParams);

  useEffect(() => {
    if (data) setCharacterList(data);
  }, [data]);

  useEffect(() => {
    if (data) {
      const filteredCharacters = data.filter((character) => {
        const matchesFilm = filters.filmTitles.length
          ? character.filmConnection.films.some((film) =>
              filters.filmTitles.includes(film.title)
            )
          : true;

        const matchesGender = filters.genders.length
          ? filters.genders.includes(character.gender)
          : true;

        return matchesFilm && matchesGender;
      });
      if (filters.filmTitles.length < 1 && filters.genders.length < 1) {
        setCharacterList(data);
      } else {
        setCharacterList(filteredCharacters);
      }
    }
  }, [filters]);

  return { characterList };
};
