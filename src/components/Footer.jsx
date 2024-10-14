import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from "@mui/icons-material/Home";
import InstagramIcon from "@mui/icons-material/Instagram";
import NearMeIcon from "@mui/icons-material/NearMe";
import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#18191a", color: "#f8f9fa" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "80%",
          margin: "auto",
          gap: { xs: 4, md: 8 },
          py: 4,
        }}
      >
        {/* Logo and Description */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Image alt="Shlok" src="/assets/logo.jpg" width={50} height={50} />
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "white" }}
          >
            HoneyBee...
          </Typography>
          <Typography
            variant="body2"
            sx={{ lineHeight: 1.7, mb: 2, color: "gray" }}
          >
            Leading provider of innovative solutions for businesses.
          </Typography>
          <Box>
            <IconButton sx={{ color: "#f8f9fa", mr: 1 }} aria-label="facebook">
              <FacebookIcon sx={{ color: "orange" }} />
            </IconButton>
            <IconButton sx={{ color: "#f8f9fa" }} aria-label="instagram">
              <InstagramIcon sx={{ color: "orange" }} />
            </IconButton>
          </Box>
        </Box>

        {/* Categories and Contact Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 4, md: 8 },
            width: { xs: "100%", md: "50%" },
          }}
        >
          {/* Company Information */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Company
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <HomeIcon sx={{ mr: 1, color: "#adb5bd" }} />
              <Typography variant="body2" sx={{ color: "gray" }}>
                Home
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <GroupIcon sx={{ mr: 1, color: "#adb5bd" }} />
              <Typography variant="body2" sx={{ color: "gray" }}>
                About us
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon sx={{ mr: 1, color: "#adb5bd" }} />
              <Typography variant="body2" sx={{ color: "gray" }}>
                Contact
              </Typography>
            </Box>
          </Box>

          {/* Contact Information */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Contact
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <AddIcCallIcon sx={{ mr: 1, color: "#adb5bd" }} />
              <Typography variant="body2" sx={{ color: "gray" }}>
                9675141090
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <EmailIcon sx={{ mr: 1, color: "#adb5bd" }} />
              <Typography variant="body2" sx={{ color: "gray" }}>
                HoneyBee...@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <NearMeIcon sx={{ mr: 1, color: "#adb5bd" }} />
              <Typography variant="body2" sx={{ color: "gray" }}>
                Arjun Nagar Tiraha, Kheria Airport road, Agra up
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#100e0e",
          color: "#f8f9fa",
          py: 2,
          px: 4,
        }}
      >
        <Typography variant="body2">© 2024 HoneyBee...</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
