import { Box, Button, Typography } from "@mui/material";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { SlSocialDribbble } from "react-icons/sl";

const AboutSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: { xs: "column", md: "row" }, // Stack on smaller screens
        textAlign: { xs: "center", md: "left" }, // Center text on small screens
        gap: 3,
        width: "90%",
        margin: "0 auto", // Center the container
        padding: "7rem",
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "60%" } }}>
        {" "}
        {/* Full width on mobile */}
        <Typography variant="h4" component="h2" gutterBottom>
          About
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          Lorem, ipsum dolor.
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          Lorem ipsum dolor sit.
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          Lorem, ipsum.
        </Typography>
        <Box
          sx={{
            border: "2px solid black",
            padding: 2,
            marginTop: 2,
            width: "max-content",
          }}
        >
          <Button variant="outlined">More About Me</Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              marginTop: 2,
            }}
          >
            <FaFacebookSquare aria-label="Facebook" />
            <FaTwitter aria-label="Twitter" />
            <FaInstagram aria-label="Instagram" />
            <SlSocialDribbble aria-label="Dribbble" />
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: { xs: "100%", md: "40%" } }}>
        {" "}
        {/* Full width on mobile */}
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
          eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          aut.
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          facilis magnam illo quos vero vitae quis consectetur, iure rem illum.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutSection;
