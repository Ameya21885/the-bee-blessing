"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { keyframes } from "@mui/system";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FaRupeeSign } from "react-icons/fa";
import "./ecommerceMain.css";

const ImageCard = () => {
  return (
    <Box
      sx={{
        padding: "2rem",
        border: "2px solid black",
        display: "flex",
        flexDirection: {
          xs: "column", // Column for mobile devices
          sm: "row-reverse", // Row reverse for larger screens
        },
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "rgb(32,1,42)",
        backgroundImage:
          "linear-gradient(90deg, rgba(32,1,42,0.97) 0%, rgba(167,47,203,1) 49%, rgba(126,0,142,1) 100%)",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%", // Full width on mobile
            sm: "50%", // 50% width on larger screens
          },
          margin: {
            xs: "0 0 1rem 0", // Add margin for spacing on mobile
            sm: "auto",
          },
        }}
      >
        <Image
          src="https://i.pinimg.com/564x/11/8a/4a/118a4a36d7a9716f237a1516b547c453.jpg"
          alt="background-image"
          width={500}
          height={500}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
            borderRadius: "10px",
          }} // Make image responsive
        />
      </Box>
      <Box
        sx={{
          width: {
            xs: "100%", // Full width on mobile
            sm: "40%", // 50% width on larger screens
          },
          textAlign: {
            xs: "center", // Center text on mobile
            sm: "left", // Left-align text on larger screens
          },
        }}
      >
        <Typography
          variant="h3" // Change to h3 for mobile
          gutterBottom
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "3rem" }, // Responsive font size
          }}
        >
          Lorem, ipsum.
        </Typography>
        <Typography
          variant="h4" // Adjust variant for better scaling on mobile
          gutterBottom
          sx={{ color: "#ddd", fontSize: { xs: "1.5rem", sm: "2rem" } }}
        >
          Lorem, ipsum dolor.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#ccc",
            lineHeight: 1.6,
            fontSize: { xs: "1rem", sm: "1.2rem" }, // Responsive text size
            padding: { xs: "0 1rem", sm: "0" }, // Add padding on mobile for better spacing
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugit
          dolorum, exercitationem quae ex odio deleniti necessitatibus est
          incidunt non!
        </Typography>
      </Box>
    </Box>
  );
};

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <ImageCard />
        </div>
        <div className="embla__slide">
          <ImageCard />
        </div>
        <div className="embla__slide">
          <ImageCard />
        </div>
      </div>
    </div>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const CategoryCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        animation: `${fadeIn} 0.8s ease-out`, // Entrance animation
        transition: "transform 0.3s, box-shadow 0.3s", // Hover transition
        "&:hover": {
          transform: "scale(1.05)", // Scale up on hover
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Shadow effect on hover
        },
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://i.pinimg.com/enabled_hi/564x/0b/2d/ca/0b2dca26656031e0001f60f514a31c30.jpg"
        loading="lazy"
        sx={{
          transition: "transform 0.3s",
          "&:hover": { transform: "scale(1.1)" },
        }} // Image animation on hover
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <FaRupeeSign style={{ marginRight: "4px" }} />
          <del style={{ marginRight: "8px" }}>456</del>
          <span style={{ color: "text.primary", fontWeight: "bold" }}>250</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

const BrowseCategory = () => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Box>
        <Typography variant="h5" component="h5">
          Explore
        </Typography>
        <Typography variant="h3" component="h3">
          Category
        </Typography>
        <Typography variant="body1" component="p" sx={{ color: "#666", mb: 2 }}>
          Lorem, ipsum dolor.
        </Typography>
      </Box>
      <Box sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Array.from(Array(4)).map((_, index) => (
              <Grid item xs={2} sm={3} md={3} key={index}>
                <CategoryCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const Ads = () => {
  return (
    <Box
      sx={{
        border: "2px solid black",
        padding: { xs: "1rem", md: "5rem" }, // Adjust padding for small screens
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: { xs: "column", md: "row" }, // Stack cards vertically on small screens
        backgroundColor: "rgb(42,1,41)",
        backgroundImage:
          "linear-gradient(90deg, rgba(42,1,41,0.9725140056022409) 0%, rgba(159,47,203,1) 49%, rgba(78,0,142,0.9893207282913166) 100%)",
      }}
    >
      <Box sx={{ marginBottom: { xs: "2rem", md: 0 } }}>
        {" "}
        {/* Space between cards on mobile */}
        <Card
          sx={{
            maxWidth: { xs: 300, sm: 400, md: 500 }, // Responsive width for different screen sizes
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row-reverse" }, // Change layout for smaller screens
          }}
        >
          <CardMedia
            sx={{ height: 200, width: { xs: 300, sm: 400, md: 500 } }} // Adjust width for small screens
            image="https://i.pinimg.com/enabled_hi/564x/e8/d8/3b/e8d83bde5975658950f9ca2d8c2538f9.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Card
          sx={{
            maxWidth: { xs: 300, sm: 400, md: 500 },
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row-reverse" },
          }}
        >
          <CardMedia
            sx={{ height: 200, width: { xs: 300, sm: 400, md: 500 } }}
            image="https://i.pinimg.com/enabled_hi/564x/e8/d8/3b/e8d83bde5975658950f9ca2d8c2538f9.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

const DeliverToYou = () => {
  return (
    <Box
      sx={{
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        alignItems: "center",
        padding: "4rem",
      }}
    >
      <Box sx={{ width: "50%" }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom>
          Amazon Deliver To You
        </Typography>

        <Typography
          variant="body1"
          component="p"
          sx={{ color: "text.primary", marginBottom: 2 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti{" "}
          <br />
          deleniti aliquid, blanditiis sed omnis delectus <br />
          ex nulla accusantium autem eius!
        </Typography>

        <Button variant="contained">View Delivery</Button>
      </Box>
      <Box sx={{ width: "50%" }}>
        <Image
          src="https://i.pinimg.com/564x/11/8a/4a/118a4a36d7a9716f237a1516b547c453.jpg"
          alt="background-image"
          width={500}
          height={500}
          style={{
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </Box>
    </Box>
  );
};

const MostViewedSection = () => {
  return (
    <Box sx={{ border: "2px solid black", padding: "3rem" }}>
      <Box>
        <Typography variant="h4" component="h2" gutterBottom>
          Most Viewed Section
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(4)).map((_, index) => (
            <Grid item xs={2} sm={3} md={3} key={index}>
              <CategoryCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const BestSeller = () => {
  return (
    <Box sx={{ border: "2px solid black", padding: "3rem" }}>
      <Box>
        <Typography variant="h4" component="h2" gutterBottom>
          Best Seller
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(4)).map((_, index) => (
            <Grid item xs={2} sm={3} md={3} key={index}>
              <CategoryCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const Home = () => {
  return (
    <div>
      <EmblaCarousel />
      <BrowseCategory />
      <Ads />
      <DeliverToYou />
      <MostViewedSection />
      <BestSeller />
      <DeliverToYou />
      Ecommerce
    </div>
  );
};

export default Home;
