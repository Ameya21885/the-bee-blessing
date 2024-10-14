import { Box, Typography } from "@mui/material";
import Image from "next/image";
import profilePic from "../../../../public/assets/profile-pic.jpg";
import TestimonialAboutCarousel from "../../../components/TestimonialAboutCarousel";

const About = () => {
  return (
    <Box>
      {/* 1 */}
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          height: "20rem", // Set height to 6rem
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          textAlign: "center", // Ensure text is centered
          padding: 3,
        }}
      >
        <Typography variant="h4" component="h3" sx={{ color: "orange" }}>
          About
        </Typography>
        <Typography variant="body1">Hi, Im Shlok</Typography>
      </Box>

      {/* 2 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" }, // Stack on smaller screens
          alignItems: "center", // Center items vertically in row layout
          textAlign: { xs: "center", md: "left" }, // Center text on mobile
          gap: 2, // Add some spacing between the boxes
          padding: 2, // Padding around the section
          width: "60%",
          margin: "auto",
        }}
      >
        <Box>
          <Typography variant="h4" component="h4" gutterBottom>
            Lorem ipsum <br />
            dolor sit amet <br />
            consectetur.
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sunt
            nihil odit ipsa optio voluptate voluptatem perferendis facere
            quisquam qui.
          </Typography>
        </Box>
      </Box>

      {/* 3 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Image
          src={profilePic}
          alt="Picture of the author"
          width={400}
          height={400}
          style={{ borderRadius: "50%" }} // Optional: Circular profile picture
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </Box>

      {/* 4 */}
      <Box
        sx={{
          textAlign: "center",
          padding: { xs: "20px", sm: "40px" }, // Responsive padding
          backgroundColor: "#f7f7f7", // Light background color
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontSize: { xs: "1.8rem", sm: "2.5rem" },
            fontWeight: "bold",
            color: "#3a004b",
            marginBottom: "10px",
          }}
        >
          Testimonials
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            marginBottom: "20px",
          }}
        >
          Reviews from Real Clients
        </Typography>
        <TestimonialAboutCarousel />
      </Box>

      
    </Box>
  );
};

export default About;
