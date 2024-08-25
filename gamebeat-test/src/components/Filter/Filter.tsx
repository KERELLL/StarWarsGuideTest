import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import { updateListQueryParam } from "../../redux/filtersSlice";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";

interface FilterProps {
  list: string[];
  filterName: "filmTitles" | "genders";
  page?: string;
  title?: string;
}

const Filter: React.FC<FilterProps> = ({ list, filterName, title }) => {
  const dispatch = useAppDispatch();
  const selectedFilters = useAppSelector(
    (state) => state.filters.queryParams[filterName]
  );

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateListQueryParam({ key: filterName, value: event.target.value })
    );
  };
  return (
    <Stack>
      <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          padding: "0.2rem",
        }}
      >
        {list.map((item, id) => {
          return (
            <FormControlLabel
              sx={{
                gap: ".5rem",
                marginLeft: ".5rem",
              }}
              label={item}
              key={id}
              control={
                <Checkbox
                  checked={
                    selectedFilters.find((name) => name === item) ? true : false
                  }
                  sx={{ alignSelf: "flex-start", padding: 0 }}
                  value={item}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    filterHandler(e)
                  }
                />
              }
            />
          );
        })}
      </Box>
    </Stack>
  );
};

export default Filter;
