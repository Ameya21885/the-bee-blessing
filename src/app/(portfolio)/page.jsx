"use client";
import { keyframes } from "@emotion/react"; // for animation
import styled from "@emotion/styled";
import { Campaign, Code, Web } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { SlSocialDribbble } from "react-icons/sl";
import profilePic from "../../../public/assets/profile-pic.jpg";
import TestimonialCarousel from "../../components/portfolio/TestimonialCarousel";

const HeroSection = () => {
  return (
    <>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens
          textAlign: { xs: "center", md: "left" }, // Center text on small screens
          gap: 3, // Add some gap between text and image
        }}
      >
        <Box>
          <Typography variant="h3" component="h1">
            Hello, Im Shlok
          </Typography>
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
      </Box> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row-reverse" },
          gap: 3,
          backgroundColor: "#161616",
          minHeight: "100vh",
          padding: 4,
        }}
      >
        <Box
          sx={{
            position: "relative", // Important for circular styling
            width: 300, // Set width of the image container
            height: 300, // Set height of the image container
            borderRadius: "50%", // Make the image circular
            overflow: "hidden", // Ensure the image stays within circular boundaries
            marginTop: { xs: 3, md: 0 }, // Add space on small screens
          }}
        >
          <Image
            src={profilePic}
            alt="Picture of the author"
            layout="fill" // Ensures the image fills the container
            objectFit="cover" // Ensures the image covers the circular area
            placeholder="blur" // Optional blur-up while loading
          />
        </Box>

        <Box
          sx={{
            textAlign: { xs: "center", md: "left" }, // Center text on small screens
            color: "white", // White text color for better contrast
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 2,
              color: "#ffbb33", // Greenish-aqua color
              transition: "color 0.3s ease, transform 0.3s ease", // Smooth animation for color and size
              "&:hover": {
                color: "#00e0b8", // Slightly different aqua shade on hover
                transform: "scale(1.05)", // Slight zoom-in effect on hover
              },
              cursor: "pointer", // Change cursor to pointer on hover
            }}
          >
            Hello, I'm Shlok
          </Typography>

          <Typography variant="body1" sx={{ mb: 1 }}>
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>

          {/* Add the Button Here */}
          <Button
            sx={{
              color: "#fff",
              backgroundColor: "transparent",
              border: "0 solid",
              boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0)",
              outline: "1px solid rgba(255, 255, 255, 0.5)",
              outlineOffset: "0px",
              textShadow: "none",
              transition: "all 1250ms cubic-bezier(0.19, 1, 0.22, 1)",
              padding: "10px 20px", // Padding for a better look
              fontSize: "16px", // Adjust font size
              borderRadius: "8px", // Rounded corners
              cursor: "pointer", // Pointer cursor on hover
              "&:hover": {
                border: "1px solid",
                boxShadow: `
        inset 0 0 20px rgba(255, 255, 255, 0.5), 
        0 0 20px rgba(255, 255, 255, 0.2)
      `,
                outlineColor: "rgba(255, 255, 255, 0)",
                outlineOffset: "15px",
                textShadow: "1px 1px 2px #427388", // Light shadow on text
                transition: "all 250ms ease-in-out",
                transform: "translateY(-3px)", // Move text slightly upwards on hover
              },
            }}
          >
            Schedule a Call
          </Button>
        </Box>
      </Box>
    </>
  );
};

const AboutSection = () => {
  const [clickedText, setClickedText] = useState(null);

  const handleTextClick = (text) => {
    setClickedText(text);
    setTimeout(() => setClickedText(null), 300); // Reset animation
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 5,
          width: "90%",
          margin: "0 auto",
          padding: { xs: "3rem 2rem", md: "5rem 3rem" },
          height: { xs: "41rem", md: "40rem" },
          // backgroundColor: "#ffffff", // Yellowish background
          // borderRadius: "16px",
          // boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            animation: "fadeInLeft 1s ease",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            onClick={() => handleTextClick("About Me")}
            sx={{
              fontWeight: "bold",
              color: clickedText === "About Me" ? "#F57F17" : "#333",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              transform: clickedText === "About Me" ? "scale(1.1)" : "scale(1)",
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            onClick={() => handleTextClick("Business Owner")}
            sx={{
              color: clickedText === "Business Owner" ? "#F57F17" : "#555",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              transform:
                clickedText === "Business Owner" ? "scale(1.1)" : "scale(1)",
            }}
          >
            A Passionate Business Owner
          </Typography>
          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            onClick={() => handleTextClick("Innovation")}
            sx={{
              color: clickedText === "Innovation" ? "#F57F17" : "#555",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              transform:
                clickedText === "Innovation" ? "scale(1.1)" : "scale(1)",
            }}
          >
            Driven by Creativity and Innovation
          </Typography>
          <Typography
            variant="h5"
            component="h3"
            onClick={() => handleTextClick("Honey Products")}
            sx={{
              color: clickedText === "Honey Products" ? "#F57F17" : "#555",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              transform:
                clickedText === "Honey Products" ? "scale(1.1)" : "scale(1)",
            }}
          >
            Crafting Quality Honey Products
          </Typography>

          <Box
            sx={{
              // border: "2px solid black",
              padding: 2,
              marginTop: 2,
              width: "max-content",
              transition: "transform 0.3s ease-in-out",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <Button
              variant="outlined"
              sx={{
                fontWeight: "bold",
                borderColor: "#333",
                color: "#333",
                transition: "all 0.3s ease",
                "&:hover": { backgroundColor: "#333", color: "#fff" },
              }}
            >
              More About Me
            </Button>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                marginTop: 2,
              }}
            >
              <FaFacebookSquare size={32} color="#4267B2" />
              <FaTwitter size={32} color="#1DA1F2" />
              <FaInstagram size={32} color="#E1306C" />
              <SlSocialDribbble size={32} color="#EA4C89" />
            </Box>
          </Box>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            animation: "fadeInRight 1s ease",
          }}
        >
          <Typography
            variant="body1"
            gutterBottom
            onClick={() => handleTextClick("Passion")}
            sx={{
              color: clickedText === "Passion" ? "#F57F17" : "#666",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              transform: clickedText === "Passion" ? "scale(1.1)" : "scale(1)",
            }}
          >
            I am a businessman with a passion for providing honest and
            user-friendly honey products.
          </Typography>
          <Typography
            variant="body1"
            onClick={() => handleTextClick("Connect")}
            sx={{
              color: clickedText === "Connect" ? "#F57F17" : "#666",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              transform: clickedText === "Connect" ? "scale(1.1)" : "scale(1)",
            }}
          >
            Let's connect and create something great together!
          </Typography>
        </Box>
      </Box>
    </>
  );
};

const ExpertiseContainer = styled(Box)({
  // border: "2px solid black",
  padding: "30px",
  backgroundColor: "#ffe066",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100%", // Ensures the container is full width
});

const iconStyles = {
  fontSize: "3rem",
  marginBottom: "10px",
};

const expertiseItems = [
  {
    title: "Web Development",
    description:
      "Make any layout responsive. Remix fixed layouts to fluid by changing the column and gutter widths and removing a few columns as needed.",
    IconComponent: Web,
    color: "#2196F3",
  },
  {
    title: "Content Marketing",
    description:
      "The markup you write gets semantic classes. Unless you want to use them, in which case they are included.",
    IconComponent: Campaign,
    color: "#4CAF50",
  },
  {
    title: "Software Engineering",
    description:
      "Build scalable software solutions using the latest technologies and best practices.",
    IconComponent: Code,
    color: "#F44336",
  },
];

const ExpertiesSection = () => {
  return (
    <ExpertiseContainer
      sx={{
        height: {
          xs: "auto", // Height adjusts based on content for mobile screens
          md: "35rem", // Fixed height for medium screens and larger (desktop)
        },
        padding: {
          xs: "15px", // Smaller padding for mobile screens
          sm: "20px",
          md: "30px", // Default padding for medium and larger screens
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: "30px", sm: "40px", md: "50px" } }}
      >
        Expertise
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{ marginTop: "20px", paddingX: { xs: "10px", sm: "20px" } }}
      >
        {expertiseItems.map(
          ({ title, description, IconComponent, color }, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ textAlign: "center" }}
            >
              <IconComponent sx={{ ...iconStyles, color }} />
              <Typography variant="h5">{title}</Typography>
              <Typography variant="body1">{description}</Typography>
            </Grid>
          )
        )}
      </Grid>
    </ExpertiseContainer>
  );
};

const TestimonialSection = () => {
  return (
    <>
      <Box
        sx={{
          border: "2px solid white",
          height: "35rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: { xs: "20px", md: "40px" },
          backgroundColor: "#000000",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ color: "#ffffff" }}
        >
          Clients
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: "#ffffff" }}>
          I have had the privilege of working with these incredible brands.
        </Typography>

        {/* Carousel Component */}
        <Box sx={{ marginTop: 4 }}>
          <TestimonialCarousel />
        </Box>
      </Box>
    </>
  );
};

// Define keyframes for border animation
const borderAnimation = keyframes`
  0% { box-shadow: 0 0 10px rgba(0, 255, 255, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 255, 1); }
  100% { box-shadow: 0 0 10px rgba(0, 255, 255, 0.5); }
`;
const LetsGetConnectSection = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "35rem",
          backgroundColor: "#121212",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "90%", // 90% width on extra small screens
              sm: "80%", // 80% width on small screens and up
              md: "70%", // 70% width on medium screens and up
              lg: "60%", // 60% width on large screens and up
            },
            maxWidth: "700px",
            padding: "2rem",
            backgroundColor: "#000000",
            border: "2px solid aqua",
            animation: `${borderAnimation} 2s infinite ease-in-out`,
            borderRadius: "8px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Column on smaller screens, row on larger
            alignItems: "center",
            justifyContent: { xs: "center", md: "space-between" },
            gap: 2,
            textAlign: { xs: "center", md: "left" }, // Center text on smaller screens
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ color: "#ffffff" }}
          >
            Get started with a consultation today.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ffd11a",
              color: "black",
              borderRadius: "25px",
              "&:hover": {
                backgroundColor: "#00FFFF",
                transform: "scale(1.1)",
                transition: "transform 0.3s ease-in-out",
              },
            }}
          >
            Let’s Work Together
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default function Home() {
  return (
    <div>
      {/* <h1>Portfolio</h1> */}

      {/* <HeroSection /> */}
      <HeroSection />

      {/* <AboutSection /> */}
      <AboutSection />

      {/* <ExpertiesSection /> */}
      <ExpertiesSection />

      {/* <TestimonialSection /> */}
      <TestimonialSection />

      {/* <LetsGetConnectSection /> */}
      <LetsGetConnectSection />
    </div>
  );
}
