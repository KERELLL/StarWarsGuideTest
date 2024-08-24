import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
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
      <CardContent>
        <Box sx={{ display: "flex", gap: "1.5rem" }}>
          <Typography variant="h5" sx={{ fontSize: "1rem", fontWeight: "600" }}>
            {character.name}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
