import { useState } from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemButtonText from "@mui/material/ListItemText";

import {
  Drawer, 
  List,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const pages = ['Mobile', 'TV', 'Laptop','Fashion','Electronics','Home & Kitchen'];


function Enavbar() {
  const [open, setOpen] = useState(false);

  return (
   <Box
  sx={{
    backgroundColor: "#232f3e",
       display: "flex",
    alignItems: "center",
    px: 0,
   
  }}
>

      <Toolbar
        disableGutters
        sx={{
          minHeight: "40px !important",
          px: 1,         
        }}
      >
        {/* Mobile Menu */}
        <Box sx={{ display: { xs: "flex"} }}>
          <IconButton
            size="small"
            onClick={() => setOpen(true)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>       
          
          <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{
          BackdropProps: {
            sx: { backgroundColor: "rgba(0,0,0,0.6)" }, // page disable
          },
        }}      
      >
        {/* Header */}
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
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>

        {/* Menu Content */}
        <List>
          <Typography sx={{ px: 2, py: 1, fontWeight: "bold" }}>
            Trending
          </Typography>

          <ListItemButton>
            <ListItemButtonText primary="Best Sellers" />
          </ListItemButton>
          <ListItemButton>
            <ListItemButtonText primary="New Releases" />
          </ListItemButton>
          <ListItemButton>
            <ListItemButtonText primary="Movers & Shakers" />
          </ListItemButton>

          <Divider />

          <Typography sx={{ px: 2, py: 1, fontWeight: "bold" }}>
            Digital Content and Devices
          </Typography>

          <ListItemButton>
            <ListItemButtonText primary="Echo & Alexa" />
          </ListItemButton>
          <ListItemButton>
            <ListItemButtonText primary="Fire TV" />
          </ListItemButton>
          <ListItemButton>
            <ListItemButtonText primary="Kindle E-Readers & eBooks" />
          </ListItemButton>
          <ListItemButton>
            <ListItemButtonText primary="Amazon Prime Video" />
          </ListItemButton>
        </List>
      </Drawer>
      


        </Box>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, ml: 1 }}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{
                color: "#fff",
                fontSize: 13,
                fontWeight: 500,
                px: 1.5,
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Box>
  );
}
export default Enavbar;