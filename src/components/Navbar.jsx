"use client";
import CloseIcon from "@mui/icons-material/Close";
import ContactMailIcon from "@mui/icons-material/ContactMail"; // Example icon
import HomeIcon from "@mui/icons-material/Home"; // Example icon
import InfoIcon from "@mui/icons-material/Info"; // Example icon
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';

const pages = [
  {
    id: 1,
    title: "Home",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: "About",
    link: "/about",
    icon: <InfoIcon />,
  },
  {
    id: 3,
    title: "Contact",
    link: "/contact",
    icon: <ContactMailIcon />,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleNavigation = (link) => {
    router.push(link);
    setOpen(false); // Close the drawer after navigation
  };

  const DrawerList = (
    <Box sx={{ width: "100%" }} role="presentation">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center", // Center vertically
            gap: 1, // Adds space between Avatar and Typography
            padding: 1, // Optional padding around the container
          }}
        >
          <Avatar
            alt="Shlok"
            src="/assets/logo.jpg"
            // onError={(e) => {
            //   e.currentTarget.src = "/path/to/default-avatar.jpg";
            // }} // Fallback avatar
            sx={{ width: 50, height: 50 }} // You can adjust the size as needed
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              fontFamily: "'Poppins', sans-serif",
              // "&:hover": {
              //   cursor: "pointer", // Change cursor to pointer on hover
              //   color: "primary.main", // Change color on hover if needed
              // },
            }}
            onClick={() => handleNavigation("/profile")} // Navigate to profile
          >
            Shlok...
          </Typography>
        </Box>

        <Box>
          <IconButton
            onClick={toggleDrawer(false)}
            aria-label="close navigation menu"
          >
            <CloseIcon
              sx={{
                border: "2px solid black",
                borderRadius: "20px",
                color: "black",
              }}
            />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <List>
        {pages.map(({ title, link, icon }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(link)}
              sx={{
                "&:hover": {
                  backgroundColor: "#f5f5f5", // Change background color on hover
                },
                // Optional: style for active link
                // backgroundColor: router.pathname === link ? "#e0e0e0" : "transparent",
              }}
            >
              <ListItemIcon sx={{ color: "black" }}>{icon}</ListItemIcon>
              <ListItemText
                primary={title}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "#090808" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop logo */}
          <Typography
            variant="h6"
            noWrap
            onClick={() => router.push("/")}
            sx={{
              mr: 2,
              fontWeight: 600,
              letterSpacing: ".1rem",
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
            className="dancing-script"
          >
            The-Bee-Blessing
          </Typography>

          {/* Desktop page links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => handleNavigation(page.link)}
                sx={{
                  my: 2,
                  color: "orange",
                  display: "block",
                  transition: "color 0.3s ease",
                  // "&:hover": {
                  //   color: "yellow",
                  // },
                  // Optional: active link style
                  // backgroundColor: router.pathname === page.link ? "#f5f5f5" : "transparent",
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* Mobile menu */}
          <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ color: "White" }} />
            </IconButton>
            <Drawer
              open={open}
              onClose={toggleDrawer(false)}
              anchor="right"
              PaperProps={{ sx: { width: "100%" } }}
            >
              {DrawerList}
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
