"use client"
import { Box, Button, Typography } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { SlSocialDribbble } from "react-icons/sl";
import profilePic from "../../../public/assets/profile-pic.jpg";
import TestimonialCarousel from "../../components/portfolio/TestimonialCarousel";
import { keyframes } from "@emotion/react"; // for animation



const HeroSection=()=>{
  return(
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
  )
}

const AboutSection=()=>{
  const [clickedText, setClickedText] = useState(null);

  const handleTextClick = (text) => {
    setClickedText(text);
    setTimeout(() => setClickedText(null), 300); // Reset animation
  };
  return(
    <>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: { xs: "column", md: "row" }, 
          textAlign: { xs: "center", md: "left" },
          gap: 3,
          width: "90%",
          margin: "0 auto",
          padding: "7rem",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "60%" } }}>
          {" "}
         
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
       
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eum, aut.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            facilis magnam illo quos vero vitae quis consectetur, iure rem
            illum.
          </Typography>
        </Box>
      </Box> */}
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
        backgroundColor: "#ffffff", // Yellowish background
        borderRadius: "16px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Left Section */}
      <Box sx={{ width: { xs: "100%", md: "50%" }, animation: "fadeInLeft 1s ease" }}>
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
            transform: clickedText === "Business Owner" ? "scale(1.1)" : "scale(1)",
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
            transform: clickedText === "Innovation" ? "scale(1.1)" : "scale(1)",
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
            transform: clickedText === "Honey Products" ? "scale(1.1)" : "scale(1)",
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

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: 2 }}>
            <FaFacebookSquare size={32} color="#4267B2" />
            <FaTwitter size={32} color="#1DA1F2" />
            <FaInstagram size={32} color="#E1306C" />
            <SlSocialDribbble size={32} color="#EA4C89" />
          </Box>
        </Box>
      </Box>

      {/* Right Section */}
      <Box sx={{ width: { xs: "100%", md: "50%" }, animation: "fadeInRight 1s ease" }}>
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
          I am a businessman with a passion for providing honest and user-friendly honey products.
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
  )
}

const CustomIcon = ({ children }) => (
  <div>
    <svg width="50" height="50"> {/* Adjust size if needed */}
      {children}
    </svg>
  </div>
);
const ExpertiesSection=()=>{
  return(
    <>
        {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" }, 
          gap: 3, 
          width: "90%",
          margin: "0 auto",
          padding: "7rem",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "40%" } }}>
          {" "}
      
          <Typography variant="h4" component="h3" gutterBottom>
            Experties
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea animi
            consectetur hic laudantium. Molestias cupiditate aliquid
            exercitationem iure qui aspernatur.
          </Typography>
          <Button variant="outlined">Outlined</Button>
        </Box>

        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          {" "}
         
          <ol>
            <li>
              <Typography variant="h6" component="h4" gutterBottom>
                Digital Marketing
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                sit quas mollitia eos nobis reprehenderit fuga, necessitatibus
                inventore. In, officia.
              </Typography>
            </li>

            <li>
              <Typography variant="h6" component="h4" gutterBottom>
                Project Management
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                amet quidem error, nisi dolorem nam numquam nihil voluptatum
                sapiente exercitationem.
              </Typography>
            </li>

            <li>
              <Typography variant="h6" component="h4" gutterBottom>
                Content Marketing
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore, officiis. Tempora totam rerum nam doloremque, eveniet
                debitis veritatis eaque quasi!
              </Typography>
            </li>
          </ol>
        </Box>
      </Box> */}
    <div style={{
      padding: '30px',
      backgroundColor: '#ffe066',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <h1 style={{fontSize:"50px"}}>Expertise</h1>
      {/* Grid container for the expertise cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {/* Card 1 */}
        <div style={{ textAlign: "center" }}>
        <SvgIcon component="svg" fontSize="large" viewBox="0 0 64 64">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#2196F3">
      <path d="M2 8h60v48H2z" />
      <path d="M10 16h44v32H10z" fill="#FFF" />
      <path d="M16 24h8v8h-8zM40 24h8v8h-8z" fill="#000" />
    </svg>
  </SvgIcon>
          <h3>Web Development</h3>
          <p>
            Make any layout responsive. Remix fixed layouts to fluid by changing
            the column and gutter widths and removing a few columns as needed.
          </p>
        </div>

        {/* Card 2 */}
        <div style={{ textAlign: "center" }}>
        <SvgIcon fontSize="large">
  {/* Example SVG path for a content/marketing icon */}
  <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 8h14v-2H7v2zm0-4h14v-2H7v2zm0-6v2h14V7H7zm11 2h2V3h-2v6zM9 3v2h2V3H9zm4 0v6h2V3h-2zm-4 8h6v-2H9v2z" />
</SvgIcon>
<h3>Content Marketing</h3>
          <p>
            The markup you write gets semantic classes. Unless you want to use
            them, in which case they are included.
          </p>
        </div>

        {/* Card 3 */}
        <div style={{ textAlign: "center" }}>
        <SvgIcon component="svg" fontSize="large" viewBox="0 0 64 64">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#4CAF50">
      <path d="M32 2a30 30 0 1030 30A30.034 30.034 0 0032 2zm0 58A28 28 0 114.021 34H32v26z" />
      <path d="M32 4v26h26A28.03 28.03 0 0032 4z" />
      <path d="M29 29h6v6h-6z" />
    </svg>
  </SvgIcon>
          <h3>Digital Marketing</h3>
          <p>
            Precise fractions are possible. Variable grid systems. Fluid layouts
            will look exactly the same in every browser.
          </p>
        </div>
      </div>

      {/* Example Section */}
      
    </div>
    </>
  )
}

const TestimonialSection=()=>{
  return(
    <>
      {/* <Box
        sx={{
          textAlign: "center",
          padding: { xs: "20px", md: "40px" }, 
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Clients
        </Typography>
        <Typography variant="body1" paragraph>
          I have had the privilege of working with these incredible brands.
        </Typography>

      
        <Box sx={{ marginTop: 4 }}>
          <TestimonialCarousel />
        </Box>
      </Box> */}
     <Box
      sx={{
        textAlign: "center",
        padding: { xs: "20px", md: "40px" }, // Responsive padding for mobile and desktop
        backgroundColor: "#000000", // Change background to black
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom sx={{ color: "#ffffff" }}>
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
  )
}

// Define keyframes for border animation
const borderAnimation = keyframes`
  0% { box-shadow: 0 0 10px rgba(0, 255, 255, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 255, 1); }
  100% { box-shadow: 0 0 10px rgba(0, 255, 255, 0.5); }
`;
const LetsGetConnectSection=()=>{
  return(
    <>
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: 3,
          gap: 2, 
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
      </Box> */}
       <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh", // Height for centering vertically
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
          maxWidth: "700px", // Ensure it doesn’t grow too large
          padding: "2rem", // Internal padding
          backgroundColor: "#000000",
          border: "2px solid aqua",
          animation: `${borderAnimation} 2s infinite ease-in-out`,
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Align content left and right
          gap: 2, // Add space between text and button
          textAlign: "center", // Center text for smaller screens
        }}
      >
        <Typography
          style={{ color: "#ffffff" }}
          variant="h4"
          component="h2"
          gutterBottom
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
    </div>
    </>
  )
}


export default function Home() {
  return (
    <div>
      {/* <h1>Portfolio</h1> */}

      {/* <HeroSection /> */}
     <HeroSection/>

      {/* <AboutSection /> */}
    <AboutSection/>

      {/* <ExpertiesSection /> */}
  <ExpertiesSection/>

      {/* <TestimonialSection /> */}
    <TestimonialSection/>

      {/* <LetsGetConnectSection /> */}
    <LetsGetConnectSection/>
    </div>
  );
}
