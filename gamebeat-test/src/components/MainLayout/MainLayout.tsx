import { Box, Button, Container } from "@mui/material";
import { PropsWithChildren } from "react";
//@ts-ignorexdcfghj,.
import logo from "../../assets/logo.svg";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setTheme } from "../../redux/appSlice";

interface MainLayoutProps extends PropsWithChildren {}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const currentTheme = useAppSelector((state) => state.app.theme);
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    dispatch(setTheme(currentTheme === "dark" ? "light" : "dark"));
  };
  return (
    <Container sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "3rem",
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
            {currentTheme === "dark" ? (
              <LightModeOutlined />
            ) : (
              <DarkModeOutlined />
            )}
          </Button>
        </Box>
        {children}
      </Box>
    </Container>
  );
};

export default MainLayout;
