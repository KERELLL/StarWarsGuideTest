import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../../graphql/queries";
import { TGetCharacterQuery, TPerson } from "types";
import { NavLink, useParams } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  CircularProgress,
  Grid,
  Theme,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { decodeBase64Id } from "../../helpers/functions";

const CharacterInformation: React.FC = () => {
  const { characterId } = useParams();
  const { data, loading } = useQuery<TGetCharacterQuery>(GET_CHARACTER, {
    variables: { personId: characterId },
  });

  const theme = useTheme() as Theme;

  return (
    <>
      {loading ? <CircularProgress /> : null}
      {data && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            width: "100%",
            gap: "0.5rem",
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
            <NavLink
              to={`/character/${characterId}`}
              style={({ isActive }) => {
                return {
                  textDecoration: "none",
                  color: theme.palette.action.active,
                  fontWeight: isActive ? "bold" : "",
                };
              }}
            >
              {data.person.name}
            </NavLink>
          </Breadcrumbs>

          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              width: "100%",
              gap: "3rem",
              marginTop: "2rem",
            }}
          >
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${decodeBase64Id(
                characterId
              )}.jpg`}
              style={{
                objectFit: "contain",
                maxWidth: "18rem",
                width: "100%",
                height: "18rem",
              }}
            />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {data.person.name}
              </Typography>
              <Typography>Birth Year: {data.person.birthYear}</Typography>
              <Typography>Gender: {data.person.gender}</Typography>
              <Typography>Skin Color: {data.person.skinColor}</Typography>
              <Typography>
                Created: {new Date(data.person.created).getDate()}.
                {new Date(data.person.created).getMonth() + 1}.
                {new Date(data.person.created).getFullYear()}
              </Typography>
              <Typography>Homeworld: {data.person.homeworld.name}</Typography>
            </Box>
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 700, marginTop: "1rem" }}>
            Films:
          </Typography>
          {data.person.filmConnection.films.map((film) => {
            return (
              <Box sx={{ display: "flex", gap: "0.3rem" }} key={film.title}>
                <Typography sx={{ fontWeight: 700 }}>{film.title} |</Typography>
                <Typography>
                  Created: {new Date(data.person.created).getDate()}.
                  {new Date(data.person.created).getMonth() + 1}.
                  {new Date(data.person.created).getFullYear()} |
                </Typography>
                <Typography>Director: {film.director}</Typography>
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
};

export default CharacterInformation;
