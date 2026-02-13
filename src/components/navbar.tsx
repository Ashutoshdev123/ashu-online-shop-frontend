import { useState } from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Constants
const MENU_ITEMS = [
  "Mobile",
  "TV",
  "Laptop",
  "Fashion",
  "Electronics",
  "Home & Kitchen",
];

const DRAWER_SECTIONS = [
  {
    title: "Trending",
    items: ["Best Sellers", "New Releases", "Movers & Shakers"],
  },
  {
    title: "Digital Content and Devices",
    items: [
      "Echo & Alexa",
      "Fire TV",
      "Kindle E-Readers & eBooks",
      "Amazon Prime Video",
    ],
  },
];

function Enavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: "#232f3e",
        display: "flex",
        alignItems: "center",
        px: 0,
      }}
    >
      <Toolbar disableGutters sx={{ minHeight: "40px !important", px: 1 }}>
        {/* Mobile Menu */}
        <Box sx={{ display: { xs: "flex" } }}>
          <IconButton
            size="small"
            onClick={() => setDrawerOpen(true)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            ModalProps={{
              BackdropProps: {
                sx: { backgroundColor: "rgba(0,0,0,0.6)" },
              },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#232f3e",
                color: "#fff",
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">Hello, Sign in</Typography>
              <IconButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Box>

            <List>
              {DRAWER_SECTIONS.map((section, index) => (
                <Box key={section.title}>
                  <Typography sx={{ px: 2, py: 1, fontWeight: "bold" }}>
                    {section.title}
                  </Typography>
                  {section.items.map((item) => (
                    <ListItemButton key={item}>
                      <ListItemText primary={item} />
                    </ListItemButton>
                  ))}
                  {index < DRAWER_SECTIONS.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </Drawer>
        </Box>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, ml: 1 }}>
          {MENU_ITEMS.map((item) => (
            <Button
              key={item}
              sx={{
                color: "#fff",
                fontSize: 13,
                fontWeight: 500,
                px: 1.5,
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Box>
  );
}

export default Enavbar;
