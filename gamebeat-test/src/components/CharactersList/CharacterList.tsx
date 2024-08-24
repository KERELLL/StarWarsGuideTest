import CharacterCard from "@components/CharacterCard";
import { useQuery } from "@apollo/client";
import type { TGetCharactersQuery, TPerson } from "types";
import { GET_CHARACTERS } from "../../graphql/queries";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/appSlice";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { setTheme } from "../../redux/appSlice";
import { Link } from "react-router-dom";

const CharacterList: React.FC = () => {
  const { loading, error, data } =
    useQuery<TGetCharactersQuery>(GET_CHARACTERS);

  const currentTheme = useAppSelector((state) => state.app.theme);
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    dispatch(setTheme(currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Box sx={{ flexDirection: "column", display: "flex", gap: "2rem" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Charachters
        </Typography>
        <Button onClick={toggleTheme}>
          {currentTheme === "dark" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </Button>
      </Box>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data &&
          data.allPeople.people.map((person: TPerson) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <Link
                  to={`/character/${person.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <CharacterCard key={person.name} character={person} />
                </Link>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default CharacterList;
