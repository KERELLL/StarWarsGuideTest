import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography>
        DESIGNED AND DEVELOPED BY{" "}
        <Typography component="span" color="primary">
          KIRILL RYCHKOV
        </Typography>{" "}
        ©2024
      </Typography>
    </Box>
  );
};

export default Footer;
