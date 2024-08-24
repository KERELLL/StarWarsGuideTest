import CharacterCard from "@components/CharacterCard";
import { useQuery } from "@apollo/client";
import type { TGetCharactersQuery, TPerson } from "types";
import { GET_CHARACTERS } from "../../graphql/queries";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Button,
  CircularProgress,
  Grid,
  Popover,
  Theme,
  useTheme,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Filter from "@components/Filter/Filter";
import { useAppSelector } from "../../redux/store";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { categories, genders } from "../../data/filters.const";

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

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const theme = useTheme() as Theme;
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
      <Breadcrumbs aria-label="breadcrumb">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              textDecoration: "none",
              color: theme.palette.action.active,
              fontWeight: isActive ? "bold" : "",
            };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/characters"
          style={({ isActive }) => {
            return {
              textDecoration: "none",
              color: theme.palette.action.active,
              fontWeight: isActive ? "bold" : "",
            };
          }}
        >
          Characters
        </NavLink>
      </Breadcrumbs>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <FilterAltIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{ maxWidth: "30rem" }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreOutlined />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Films
          </AccordionSummary>
          <AccordionDetails>
            <Filter list={categories} filterName="filmTitles" />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreOutlined />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Genders
          </AccordionSummary>
          <AccordionDetails>
            <Filter list={genders} filterName="genders" />
          </AccordionDetails>
        </Accordion>
      </Popover>

      {loading ? <CircularProgress sx={{ alignSelf: "center" }} /> : null}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
