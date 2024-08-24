import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { updateListQueryParam } from "../../redux/filtersSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

interface FilterProps {
  list: string[];
  filterName: "filmTitles" | "genders";
  page?: string;
}

const Filter: React.FC<FilterProps> = ({ list, filterName }) => {
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
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
  );
};

export default Filter;
