import { Stack, Typography } from "@mui/material";
import { TPerson } from "types";

interface CharacterDetailsProps {
  character: TPerson;
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character }) => {
  return (
    <Stack>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        {character.name}
      </Typography>
      <Typography>Birth Year: {character.birthYear}</Typography>
      <Typography>Gender: {character.gender}</Typography>
      <Typography>Skin Color: {character.skinColor}</Typography>
      <Typography>
        Created: {new Date(character.created).getDate()}.
        {new Date(character.created).getMonth() + 1}.
        {new Date(character.created).getFullYear()}
      </Typography>
      <Typography>Homeworld: {character.homeworld.name}</Typography>
    </Stack>
  );
};

export default CharacterDetails;
