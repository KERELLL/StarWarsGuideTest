import CharacterCard from "@components/CharacterCard";
import { useQuery } from "@apollo/client";
import type { TGetCharactersQuery, TPerson } from "types";
import { GET_CHARACTERS } from "../../graphql/queries";
import { Box, CircularProgress, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Filter from "@components/Filter/Filter";
import { useAppSelector } from "../../redux/store";
import { categories, genders } from "../../data/filters.const";

import FilterMenu from "@components/FilterMenu/FilterMenu";
import Breadcrumbs from "@components/Breadcrumbs/Breadcrumbs";

const CharacterList: React.FC = () => {
  const { loading, error, data } =
    useQuery<TGetCharactersQuery>(GET_CHARACTERS);

  const [characterList, setCharacterList] = useState<TPerson[]>(null);

  const filters = useAppSelector((state) => state.filters.queryParams);

  useEffect(() => {
    if (data) setCharacterList(data.allPeople.people);
  }, [data]);

  useEffect(() => {
    if (data) {
      const filteredCharacters = data.allPeople.people.filter((character) => {
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
        setCharacterList(data.allPeople.people);
      } else {
        setCharacterList(filteredCharacters);
      }
    }
  }, [filters]);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
        width: "100%",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
      }}
    >
      <Breadcrumbs
        crumbs={[
          {
            link: "/",
            title: "Home",
          },
          {
            link: "/characters",
            title: "Characters",
          },
        ]}
      />

      <FilterMenu>
        <Filter list={genders} filterName="genders" title="Genders" />
        <Filter list={categories} filterName="filmTitles" title="Films" />
      </FilterMenu>

      {loading ? <CircularProgress sx={{ alignSelf: "center" }} /> : null}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {characterList &&
          characterList.map((person: TPerson) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={person.name}>
                <Link
                  to={`/character/${person.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <CharacterCard character={person} />
                </Link>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default CharacterList;
