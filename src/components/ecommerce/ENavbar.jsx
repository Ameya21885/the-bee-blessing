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
import { IoMdCloseCircleOutline } from "react-icons/io";

const InformationBox = () => {
  return (
    <Box
      sx={{
        padding: 1,
        backgroundColor: "black",
        color: "wheat",
        display: "flex",
        justifyContent: "center", // Centers the content horizontally
        alignItems: "center", // Centers the content vertically
        position: "relative", // For absolute positioning of the close button
      }}
    >
      {/* Typography centered in the box */}
      <Typography
        variant="body1"
        component="h6"
        gutterBottom
        sx={{ flexGrow: 1, textAlign: "center" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, illo?
      </Typography>

      {/* Close icon positioned at the right */}
      <IoMdCloseCircleOutline
        style={{
          position: "absolute",
          right: "16px", // Positioned 16px from the right edge
          fontSize: "24px",
          cursor: "pointer",
        }}
      />
    </Box>
  );
};
const pages = [
  {
    id: 1,
    title: "Home",
    link: "/ecommerce/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: "About",
    link: "/ecommerce/about",
    icon: <InfoIcon />,
  },
  {
    id: 3,
    title: "Our Process",
    link: "/ecommerce/our-process",
    icon: <ContactMailIcon />,
  },
  {
    id: 4,
    title: "Products",
    link: "/ecommerce/products",
    icon: <ContactMailIcon />,
  },
  {
    id: 5,
    title: "Contact",
    link: "/ecommerce/contact",
    icon: <ContactMailIcon />,
  },
];

const ENavbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleNavigation = (link) => {
    router.push(link);
    setOpen(false);
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
            alignItems: "center",
            gap: 1,
            padding: 1,
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
      <List
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
        }}
      >
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
    <Box sx={{ flexGrow: 1 }}>
      {/* Information Box */}
      <InformationBox />

      <AppBar position="static" sx={{ backgroundColor: "#333" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Bee Blessing
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
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
          {/* Login Button */}
          <Box>
            <Button
              sx={{ display: { xs: "none", sm: "block" } }}
              color="inherit"
            >
              Login
            </Button>
          </Box>

          {/* menu button */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
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
              PaperProps={{ sx: { width: "100%", overflowX: "hidden"  } }}
            >
              {DrawerList}
            </Drawer>
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ENavbar;
