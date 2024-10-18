"use client";
import { Box, Card, Typography } from "@mui/material";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import "./about.css";
import profilePic from "/public/assets/profile-pic.jpg";

const HeroAbout = () => {
  return (
    <Box
      sx={{
        height: "90vh", // Full viewport height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", // Center vertically and horizontally
        padding: { xs: "1rem", md: "2rem" },
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6" // Smaller heading
        component="h2"
        sx={{
          marginBottom: "1rem",
          fontWeight: "bold",
          fontSize: { xs: "1rem", md: "1.5rem" }, // Smaller, responsive font size
        }}
      >
        We’re HoneyVeda, and we don’t produce honey
      </Typography>
      <Typography
        variant="body2" // Smaller paragraph font
        sx={{
          fontSize: { xs: "0.875rem", md: "1rem" }, // Small, responsive paragraph size
          lineHeight: "1.6",
        }}
      >
        Hi, we’re so happy to meet you! First, we want to get the introductions
        right. The honey bees produce honey, we don’t. At HoneyVeda, we only
        collect raw, natural honey and pack it carefully. Of course, we are
        experts at helping bees collect honey, but we don’t process it or add
        anything to it. Because we want you to buy pure honey only.
      </Typography>
    </Box>
  );
};

const VedioAbout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        // alignItems: "center",
        border: "2px solid black",
        padding: "4rem",
      }}
    >
      <video width="640" height="480" controls>
        <source src="/public/videos/videoplayback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video width="640" height="480" controls>
        <source src="/public/videos/videoplayback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

const OurStoryCard = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Responsive font size
        }}
      >
        2020-2024
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{
          fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" }, // Responsive text size
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Typography>
    </Box>
  );
};

const OurStoryCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          {" "}
          <OurStoryCard />{" "}
        </div>
        <div className="embla__slide">
          {" "}
          <OurStoryCard />{" "}
        </div>
        <div className="embla__slide">
          {" "}
          <OurStoryCard />{" "}
        </div>
      </div>
    </div>
  );
};

const OurStory = () => {
  return (
    <Box
      sx={{
        padding: { xs: "1rem", md: "2rem" },
        display: "grid",
        justifyItems: "center",
        textAlign: "center",
        backgroundColor: "orange",
      }}
    >
      <Card>
        <Box sx={{ marginBottom: "24px" }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              padding: "8px",
              borderRadius: "8px",
              display: "inline-block",
            }}
          >
            Our Story
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: { xs: "1rem", md: "2rem" }, // Responsive padding for the inner box
            // border: "2px solid black",
            borderRadius: "8px",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, // Stacks on small screens, side by side on larger screens
            gap: "24px",
            alignItems: "center",
            justifyItems: "center",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <Box>
            <Image
              src={profilePic}
              alt="Profile picture of the author"
              width={200}
              height={200}
              blurDataURL="data:image/png;base64,..."
              placeholder="blur"
              style={{ width: "100%", maxWidth: "200px", height: "auto" }} // Responsive image sizing
            />
          </Box>
          <Box>
            <OurStoryCarousel />
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

const FounderStory = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' }, // Stacks items on small screens, side by side on larger screens
      justifyContent: 'space-around', // Center the content
      alignItems: 'center', // Center items vertically
      padding: '2rem', // Add padding around the container
      gap: '2rem', // Space between items
    }}
  >
    <Box sx={{ textAlign: 'center', maxWidth: '500px' }}>
      <Typography variant="h3" component="h3">
        The founder’s story
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginBottom: '1rem' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe inventore
        asperiores culpa et totam quisquam illo cum dignissimos? Dolores, tempore!
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginBottom: '1rem' }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        dolores, id ipsum hic nisi quae beatae nam tempora modi itaque?
      </Typography>
      <Typography variant="body1" component="p">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sint
        veniam, repudiandae cumque distinctio asperiores.
      </Typography>
    </Box>
    <Box>
      <Image
        src={profilePic}
        alt="Profile picture of the author"
        width={200}
        height={200}
        blurDataURL="data:image/png;base64,..."
        placeholder="blur"
        style={{ width: '100%', maxWidth: '200px', height: 'auto' }} // Responsive image sizing
      />
    </Box>
  </Box>
  );
};

const About = () => {
  return (
    <div>
      <HeroAbout />
      <VedioAbout />
      <OurStory />
      <FounderStory/>
      About
    </div>
  );
};

export default About;
