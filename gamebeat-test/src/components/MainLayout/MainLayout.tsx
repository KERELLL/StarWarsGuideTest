import { Box, Container } from "@mui/material";
import { PropsWithChildren } from "react";
//@ts-ignorexdcfghj,.
import logo from "../../assets/logo.svg";

interface MainLayoutProps extends PropsWithChildren {}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
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
        <img
          src={logo}
          style={{
            width: "10rem",
            height: "10rem",
          }}
        />
        {children}
      </Box>
    </Container>
  );
};

export default MainLayout;
