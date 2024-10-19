import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import profilePic from "/public/assets/profile-pic.jpg";

const OurProcessHeroSection = () => {
  return (
    <Box
      sx={{
        border: "2px solid black",
        width: "100%",
        height: {
          xs: "20rem", // Height for extra small screens (mobile)
          sm: "30rem", // Height for small screens (tablet)
          md: "37rem", // Height for medium screens (default/desktop)
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontSize: {
            xs: "1.5rem", // Font size for small screens
            sm: "2rem", // Font size for medium screens
            md: "2.5rem", // Font size for larger screens
          },
        }}
      >
        Our Process
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{
          marginBottom: "1rem",
          fontSize: {
            xs: "0.875rem", // Smaller font size for small screens
            sm: "1rem", // Default size for medium screens
          },
        }}
      >
        Along with our scientific beekeeping process, we follow beehive to
        bottle policy. It makes sure you receive the best possible natural
        honey. Every time.
      </Typography>
    </Box>
  );
};

const OurProcessStepper = () => {
  return (
    <Box>
      <h1>OurProcessStepper</h1>
    </Box>
  );
};

const HoneyVedaCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "1rem",
        borderRadius: "10px", // Rounded corners
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth transition
        "&:hover": {
          transform: "scale(1.05)", // Slight zoom on hover
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)", // Stronger shadow on hover
        },
      }}
    >
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          benevolent
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ab
          provident nostrum. Saepe quasi ullam nihil quam aliquam iusto itaque?
        </Typography>
      </CardContent>
    </Card>
  );
};

const HoneyVedaGrid = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={12} sm={6} md={6} key={index}>
          <HoneyVedaCard />
        </Grid>
      ))}
    </Grid>
  );
};

const YummyPromiseFromHoneyVeda = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: {
          xs: "column", // Stack vertically on small screens
          md: "row", // Side-by-side on medium and larger screens
        },
        width: "100%",
        backgroundColor: "#f5f5f5", // Soft background color for the entire section
        padding: "2rem", // Add padding for breathing space
        borderRadius: "10px", // Rounded corners for the section
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
      }}
    >
      {/* Text and grid box */}
      <Box
        sx={{
          border: "2px solid transparent",
          width: {
            xs: "100%", // Full width on small screens
            md: "60%", // 60% width on medium and larger screens
          },
          padding: "1rem", // Add padding inside the box
          marginBottom: { xs: "1.5rem", md: 0 }, // Add margin on small screens
          textAlign: { xs: "center", md: "left" }, // Center text on small screens
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{
            fontWeight: "bold",
            color: "#333", // Darker color for better readability
            marginBottom: "1rem",
          }}
        >
          The yummy promise from HoneyVeda
        </Typography>
        <Box>
          <HoneyVedaGrid />
        </Box>
      </Box>

      {/* Image box */}
      <Box
        sx={{
          width: {
            xs: "100%", // Full width on small screens
            md: "40%", // 40% width on medium and larger screens
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px", // Rounded corners for the image box
          overflow: "hidden", // Ensure image fits inside the box
          backgroundColor: "#fff", // Background color for image container
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for image container
          transition: "transform 0.3s", // Smooth hover effect
          "&:hover": {
            transform: "scale(1.05)", // Slight zoom on hover
          },
        }}
      >
        <Image
          src={profilePic}
          alt="Profile picture of the author"
          width={600}
          height={600}
          blurDataURL="data:image/png;base64,..."
          placeholder="blur"
          style={{
            width: "100%",
            maxWidth: "300px", // Increase max width for better visibility
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
};



const OurProcess = () => {
  return (
    <div>
      <OurProcessHeroSection />
      <OurProcessStepper />
      <YummyPromiseFromHoneyVeda />
    </div>
  );
};

export default OurProcess;
