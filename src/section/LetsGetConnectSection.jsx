import { Box, Button, Typography } from "@mui/material";

const LetsGetConnectSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center content horizontally
        textAlign: "center", // Center text
        padding: 3,
        gap: 2, // Add spacing between elements
        padding: "6rem",
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Get started with a consultation today.
      </Typography>

      <Typography variant="body1" gutterBottom>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
        architecto numquam, nemo eius aliquam quidem.
      </Typography>

      <Button variant="contained">Lets Work Together</Button>
    </Box>
  );
};

export default LetsGetConnectSection;
