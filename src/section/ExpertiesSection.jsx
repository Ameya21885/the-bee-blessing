import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ExpertiesSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: { xs: "column", md: "row" }, // Stack on mobile
        gap: 3, // Add gap between boxes
        width: "90%",
        margin: "0 auto", // Center section
        padding:'7rem',
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "40%" } }}> {/* Responsive width */}
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

      <Box sx={{ width: { xs: "100%", md: "50%" } }}> {/* Responsive width */}
        <ol>
          <li>
            <Typography variant="h6" component="h4" gutterBottom>
              Digital Marketing
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sit
              quas mollitia eos nobis reprehenderit fuga, necessitatibus
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
  );
};

export default ExpertiesSection;
