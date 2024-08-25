import {
  ArrowDropDownOutlined,
  ArrowDropUpOutlined,
} from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { PropsWithChildren, useState } from "react";

interface FilterMenuProps extends PropsWithChildren {}

const FilterMenu: React.FC<FilterMenuProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleShow = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Box>
      <Button variant="contained" onClick={handleShow}>
        Filters
        {isVisible ? <ArrowDropUpOutlined /> : <ArrowDropDownOutlined />}
      </Button>
      <Box
        sx={{
          display: `${isVisible ? "block" : "none"}`,
          marginTop: "1rem",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default FilterMenu;
