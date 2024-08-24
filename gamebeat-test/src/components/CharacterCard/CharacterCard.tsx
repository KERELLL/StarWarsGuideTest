import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { decodeBase64Id } from "../../helpers/functions";
import type { TPerson } from "types";

interface CharacterCardProps {
  character: TPerson;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        transform: "translate(0, 0)",
        "&:hover": {
          transition: "all 0.2s ease-in-out",
          boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.2)",
          transform: "translate(0, -2px)",
          border: "1px solid #cccccc",
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${decodeBase64Id(
            character.id
          )}.jpg`}
          loading="lazy"
          style={{
            objectFit: "contain",
          }}
        />
        <Typography
          variant="h5"
          sx={{ fontSize: "1rem", fontWeight: "600", padding: "0.5rem" }}
        >
          {character.name}
        </Typography>
      </Box>
    </Card>
  );
};

export default CharacterCard;
