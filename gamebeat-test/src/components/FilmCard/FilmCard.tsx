import { Card, Theme, Typography, useTheme } from "@mui/material";
import { TFilm } from "types";

interface FilmCardProps {
  filmInfo: TFilm;
}

const FilmCard: React.FC<FilmCardProps> = ({ filmInfo }) => {
  const theme = useTheme() as Theme;

  return (
    <Card
      sx={{
        padding: "1rem",
        maxWidth: "13rem",
        width: "100%",
        [theme.breakpoints.down("md")]: {
          maxWidth: "unset",
          width: "100%",
        },
      }}
      key={filmInfo.title}
    >
      <Typography sx={{ fontWeight: 700 }}>{filmInfo.title}</Typography>
      <Typography>
        Created: {new Date(filmInfo.created).getDate()}.
        {new Date(filmInfo.created).getMonth() + 1}.
        {new Date(filmInfo.created).getFullYear()}
      </Typography>
      <Typography>Director: {filmInfo.director}</Typography>
    </Card>
  );
};

export default FilmCard;
