import { Box } from "@mui/material";

const Error404: React.FC = () => {
  return (
    <Box
      sx={{
        padding: "40px",
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: "20px",
        fontWeight: 500,
      }}
    >
      404 Page not found
    </Box>
  );
};

export default Error404;
