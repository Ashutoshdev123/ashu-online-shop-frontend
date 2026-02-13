import "./header.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { InputBase, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Enavbar from "../components/navbar";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="headerCointer">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ flexWrap: "wrap", gap: 0 }}>
          {/* Logo - always left, never shrinks */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              minWidth: 0,
            }}
          >
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: { xs: ".2rem", md: ".3rem" },
                color: "inherit",
                textDecoration: "none",
                fontSize: { md: "1rem", lg: "1.25rem" },
              }}
            >
              LOGO
            </Typography>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: { xs: ".2rem", sm: ".3rem" },
                color: "inherit",
                textDecoration: "none",
                fontSize: { xs: "1.1rem", sm: "1.25rem" },
              }}
            >
              LOGO
            </Typography>
          </Box>

          {/* Spacer - pushes search/avatar to center and right */}
          <Box sx={{ flexGrow: 1, minWidth: 0 }} />

          <Box
            sx={{
              position: { md: "fixed" },
              left: { md: "50%" },
              transform: { md: "translateX(-50%)" },
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 1,
              width: { md: 500, lg: 600 },
              height: 40,
            }}
          >
            {/* Category Dropdown */}
            <Select
              defaultValue="All"
              variant="standard"
              disableUnderline
              sx={{
                height: "100%",
                px: 1,
                backgroundColor: "#f3f3f3",
                borderRight: "1px solid #ccc",
              }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Books">Books</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
            </Select>

            {/* Search Input */}
            <InputBase placeholder="Search Amazon.in" sx={{ flex: 1, px: 2 }} />

            {/* Search Icon */}
            <IconButton
              sx={{
                backgroundColor: "#febd69",
                height: "100%",
                borderRadius: "0 4px 4px 0",
                "&:hover": { backgroundColor: "#f3a847" },
              }}
            >
              <SearchIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
              
        </Toolbar>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            width: "100%",
            px: 1,
            py: 1,
            backgroundColor: "#131921",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 1,
              width: "100%",
              height: 40,
            }}
          >
            <InputBase placeholder="Search Amazon.in" sx={{ flex: 1, px: 2 }} />

            <IconButton
              sx={{
                backgroundColor: "#febd69",
                height: "100%",
                borderRadius: "0 4px 4px 0",
              }}
            >
              <SearchIcon />
            </IconButton>
             
          </Box>   
         
        </Box>  
      
      </Container>   
        <Enavbar />   
          
    </AppBar>
   
  );
}
export default ResponsiveAppBar;
