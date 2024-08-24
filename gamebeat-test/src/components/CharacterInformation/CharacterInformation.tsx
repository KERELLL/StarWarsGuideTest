import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../../graphql/queries";
import { TGetCharacterQuery, TPerson } from "types";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const CharacterInformation: React.FC = () => {
  const { characterId } = useParams();
  const { data } = useQuery<TGetCharacterQuery>(GET_CHARACTER, {
    variables: { personId: characterId },
  });

  return data && <Typography variant="h3">{data.person.name}</Typography>;
};

export default CharacterInformation;
