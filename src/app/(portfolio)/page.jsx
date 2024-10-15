import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { SlSocialDribbble } from "react-icons/sl";
import profilePic from "../../../public/assets/profile-pic.jpg";
import TestimonialCarousel from "../../components/TestimonialCarousel";

export default function Home() {
  return (
    <div>
      {/* <h1>Portfolio</h1> */}

      {/* <HeroSection /> */}
      <Box
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
      </Box>

      {/* <AboutSection /> */}
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
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eum, aut.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            facilis magnam illo quos vero vitae quis consectetur, iure rem
            illum.
          </Typography>
        </Box>
      </Box>

      {/* <ExpertiesSection /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" }, // Stack on mobile
          gap: 3, // Add gap between boxes
          width: "90%",
          margin: "0 auto", // Center section
          padding: "7rem",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "40%" } }}>
          {" "}
          {/* Responsive width */}
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
          {/* Responsive width */}
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
      </Box>

      {/* <TestimonialSection /> */}
      <Box
        sx={{
          textAlign: "center",
          padding: { xs: "20px", md: "40px" }, // Responsive padding for mobile and desktop
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Clients
        </Typography>
        <Typography variant="body1" paragraph>
          I have had the privilege of working with these incredible brands.
        </Typography>

        {/* Carousel Component */}
        <Box sx={{ marginTop: 4 }}>
          <TestimonialCarousel />
        </Box>
      </Box>

      {/* <LetsGetConnectSection /> */}
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
    </div>
  );
}
