import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { setTheme } from "../../redux/appSlice";
//@ts-ignorexdcfghj,.
import logo from "../../assets/logo.svg";
import { useAppSelector } from "@hooks/useAppSelector";
import { useAppDispatch } from "@hooks/useAppDispatch";

const Header: React.FC = () => {
  const currentTheme = useAppSelector((state) => state.app.theme);
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    dispatch(setTheme(currentTheme === "dark" ? "light" : "dark"));
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <img
        src={logo}
        style={{
          width: "5rem",
          height: "5rem",
        }}
      />
      <Button onClick={toggleTheme}>
        {currentTheme === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
      </Button>
    </Box>
  );
};

export default Header;
