"use client";
import AddIcon from "@mui/icons-material/Add";
import AdIcon from "@mui/icons-material/AdsClick";
import ProductIcon from "@mui/icons-material/Category";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListIcon from "@mui/icons-material/List";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SupportIcon from "@mui/icons-material/SupportAgent";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const menuItems = [
  { text: "Dashboard", icon: <InboxIcon /> },
  {
    text: "Product",
    icon: <ProductIcon />,
    subItems: [
      { text: "Add Product", icon: <AddIcon /> },
      { text: "Edit Product", icon: <EditIcon /> },
      { text: "Product List", icon: <ListIcon /> },
    ],
  },
  {
    text: "Advertising",
    icon: <AdIcon />,
    subItems: [
      { text: "Add Ad", icon: <AddIcon /> },
      { text: "Manage Ads", icon: <EditIcon /> },
      { text: "Ad Statistics", icon: <ListIcon /> },
    ],
  },
  {
    text: "Customer",
    icon: <MailIcon />,
    subItems: [
      { text: "Customer List", icon: <ListIcon /> },
      { text: "Customer Support", icon: <SupportIcon /> },
    ],
  },
];

const ANavbar = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const handleDrawerToggle = () => setOpen((prevOpen) => !prevOpen);

  const toggleSubmenu = (item) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle} edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map(({ text, icon, subItems }) => (
            <div key={text}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => (subItems ? toggleSubmenu(text) : null)}
                  sx={{
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                  {subItems && (openSubmenus[text] ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                </ListItemButton>
              </ListItem>
              {subItems && (
                <Collapse in={openSubmenus[text]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {subItems.map(({ text: subText, icon: subIcon }) => (
                      <ListItemButton
                        key={subText}
                        sx={{
                          pl: open ? 4 : 2,
                          justifyContent: open ? "initial" : "center",
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {subIcon}
                        </ListItemIcon>
                        <ListItemText primary={subText} sx={{ opacity: open ? 1 : 0 }} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </List>
        <Divider />
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: open ? `calc(100% - ${drawerWidth}px)` : `calc(100% - ${theme.spacing(8) + 1}px)`,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default ANavbar;
