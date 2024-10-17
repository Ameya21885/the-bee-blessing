import { Box, IconButton, Typography } from "@mui/material";
import { FaTwitter } from "react-icons/fa";
import { SlSocialDribbble } from "react-icons/sl";
import { TiSocialSkype, TiSocialYoutubeCircular } from "react-icons/ti";

const EFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f4f4f4",
        padding: "20px",
        textAlign: "center",
        borderTop: "1px solid #ccc",
      }}
    >
      {/* Branding and Social Media Icons */}
      <Box>
        <Typography variant="h5" gutterBottom>
          The Bee Blessing
        </Typography>

        {/* Social Media Icons */}
        <Box display="flex" justifyContent="center" gap={2}>
          <IconButton href="https://twitter.com" target="_blank">
            <FaTwitter />
          </IconButton>
          <IconButton href="https://dribbble.com" target="_blank">
            <SlSocialDribbble />
          </IconButton>
          <IconButton href="https://youtube.com" target="_blank">
            <TiSocialYoutubeCircular />
          </IconButton>
          <IconButton href="https://skype.com" target="_blank">
            <TiSocialSkype />
          </IconButton>
        </Box>
      </Box>

      {/* Divider */}
      <Box sx={{ margin: "20px 0" }}>
        <hr />
      </Box>

      {/* Copyright Text */}
      <Box>
        <Typography variant="body2" color="textSecondary">
          Copyright © 2024 The Bee Blessing. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default EFooter;
