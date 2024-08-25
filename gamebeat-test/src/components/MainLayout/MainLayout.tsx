import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { PropsWithChildren } from "react";

import Footer from "@components/Footer";
import Header from "@components/Header";
import { useAppSelector } from "@hooks/useAppSelector";
import { Outlet } from "react-router-dom";

interface MainLayoutProps extends PropsWithChildren {}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const currentTheme = useAppSelector((state) => state.app.theme);

  const darkTheme = createTheme({
    palette: {
      mode: currentTheme,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 400,
        md: 550,
        lg: 800,
        xl: 1000,
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container
        sx={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
          height: "100vh",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Header />
          <Outlet />
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default MainLayout;
