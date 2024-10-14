import { Box, Typography } from "@mui/material";
import Image from "next/image";
import profilePic from "../../public/assets/profile-pic.jpg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens
        textAlign: { xs: "center", md: "left" },    // Center text on small screens
        gap: 3,  // Add some gap between text and image
      }}
    >
      <Box>
        <Typography variant="h3" component="h1">Hello, Im Shlok</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet.</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Box>
      <Box>
        <Image
          src={profilePic}
          alt="Picture of the author"
          width={500}
          height={500}
          placeholder="blur" // Optional blur-up while loading
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
