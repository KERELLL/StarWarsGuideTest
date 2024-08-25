import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../../graphql/queries";
import { TGetCharacterQuery } from "types";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Theme, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { decodeBase64Id } from "@helpers/functions";
import Breadcrumbs from "@components/Breadcrumbs";
import FilmCard from "@components/FilmCard";
import CharacterDetails from "@components/CharacterDetails";

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
              {
                link: `/character/${characterId}`,
                title: data.person.name,
              },
            ]}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              width: "100%",
              gap: "3rem",
              marginTop: "2rem",
              [theme.breakpoints.down("md")]: {
                flexDirection: "column",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "18rem",
                height: "18rem",
                [theme.breakpoints.down("sm")]: {
                  maxWidth: "unset",
                },
              }}
            >
              <img
                style={{
                  backgroundImage: `url(https://starwars-visualguide.com/assets/img/characters/${decodeBase64Id(
                    characterId
                  )}.jpg)`,
                  backgroundPosition: "center 10%",
                  backgroundSize: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>

            <CharacterDetails character={data.person} />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 700, marginTop: "1rem" }}>
            Films:
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {data.person.filmConnection.films.map((film) => {
              return <FilmCard key={film.title} filmInfo={film} />;
            })}
          </Box>
        </Box>
      )}
    </>
  );
};

export default CharacterInformation;
