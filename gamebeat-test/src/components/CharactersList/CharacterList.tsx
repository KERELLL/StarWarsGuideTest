import CharacterCard from "@components/CharacterCard";
import { useQuery } from "@apollo/client";
import type { TGetCharactersQuery, TPerson } from "types";
import { GET_CHARACTERS } from "../../graphql/queries";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Filter from "@components/Filter/Filter";
import { categories, genders } from "../../data/filters.const";
import FilterMenu from "@components/FilterMenu/FilterMenu";
import Breadcrumbs from "@components/Breadcrumbs/Breadcrumbs";
import { useCharactersFilter } from "@hooks/useCharactersFilter";

const CharacterList: React.FC = () => {
  const { loading, error, data } =
    useQuery<TGetCharactersQuery>(GET_CHARACTERS);

  const { characterList } = useCharactersFilter(data?.allPeople.people);

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

      <FilterMenu title="Filters">
        <Filter list={genders} filterName="genders" title="Genders" />
        <Filter list={categories} filterName="filmTitles" title="Films" />
      </FilterMenu>

      {loading ? (
        <CircularProgress
          data-testid={"characterListLoading"}
          sx={{ alignSelf: "center" }}
        />
      ) : null}
      {error?.message && (
        <Typography data-testid={"characterListError"}>
          {error.message}
        </Typography>
      )}

      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {characterList &&
          characterList.map((person: TPerson) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={3}
                key={person.name}
                data-testid={"characterListSuccess"}
              >
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
