"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import profilePic from "../../../public/assets/profile-pic.jpg";
import "./testimonialAboutCarousel.css";
import "./testimonialCarousel.css";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const TestimonialAboutCarouselCard = () => {
  return (
    <Card
      sx={{
        width: "90%",
        margin: "auto",
        backgroundColor: "rgb(58,0,75)",
        backgroundImage:
          "linear-gradient(90deg, rgba(58,0,75,0.97) 0%, rgba(196,0,255,1) 50%, rgba(120,0,135,1) 100%)",
      }}
    >
      <CardContent
        sx={{
          width: "90%",
          margin: "auto",
          display: "flex",
          flexDirection: {
            xs: "column", // Column layout for mobile screens
            sm: "row-reverse", // Row reverse for larger screens
          },
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Image
            src={profilePic}
            alt="Testimonial Author Picture"
            width={100}
            height={100}
            style={{ borderRadius: "50%" }} // Circular image
          />
        </Box>
        <Box sx={{ color: "white", textAlign: { xs: "center", sm: "left" } }}>
          <Typography variant="h4" component="div">
            Benevolent
          </Typography>
          <Typography gutterBottom sx={{ color: "#e2e2e2", fontSize: 14 }}>
            Word of the Day
          </Typography>
          <Typography sx={{ color: "#bebebe", mb: 1.0 }}>adjective</Typography>
          <Typography variant="body2" sx={{ color: "#190620d1" }}>
            well-meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
          <CardActions>
            <Button
              size="large"
              sx={{ color: "white", border: "1px solid white" }}
            >
              Learn More
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

const TestimonialAboutCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  // const [emblaRef] = useEmblaCarousel();

  return (
    <Box>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            {" "}
            <TestimonialAboutCarouselCard />{" "}
          </div>
          <div className="embla__slide">
            {" "}
            <TestimonialAboutCarouselCard />{" "}
          </div>
          <div className="embla__slide">
            {" "}
            <TestimonialAboutCarouselCard />{" "}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default TestimonialAboutCarousel;
