import { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Avatar,
  Button,
  Select,
  InputBase,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Enavbar from "./navbar";
import "./header.css";

// Constants
const SETTINGS = ["Profile", "Account", "Dashboard", "Logout"];
const SEARCH_PLACEHOLDER = "Search Amazon.in";
const CATEGORIES = ["All", "Books", "Electronics"];

function ResponsiveAppBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="header-container">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ flexWrap: "wrap", gap: 0 }}>
          {/* Logo Section */}
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
              href="/"
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
              href="/"
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

          {/* Spacer */}
          <Box sx={{ flexGrow: 1, minWidth: 0 }} />

          {/* Desktop Search Box */}
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
              {CATEGORIES.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
            <InputBase
              placeholder={SEARCH_PLACEHOLDER}
              sx={{ flex: 1, px: 2 }}
            />
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

          {/* Login Button (when logged out) / User Menu (when logged in) */}
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            {isLoggedIn ? (
              <>
                <Tooltip title="Account">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="User"
                      src="/static/images/avatar/2.jpg"
                      sx={{ width: 32, height: 32 }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {SETTINGS.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={
                        setting === "Logout" ? handleLogout : handleCloseUserMenu
                      }
                    >
                      <Typography sx={{ textAlign: "center" }}>
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Button
                variant="text"
                startIcon={<PersonOutlineIcon />}
                onClick={() => setIsLoggedIn(true)}
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  px: { xs: 1.5, sm: 2 },
                  py: 0.75,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.08)",
                  },
                }}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>

        {/* Mobile Search Box */}
        <Box
          className="header-search-mobile"
          sx={{
            display: { xs: "flex", md: "none" },
            width: "100%",
            px: 0,
            py: 1,
            backgroundColor: "#131921",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 0,
              width: "100%",
              height: 40,
            }}
          >
            <InputBase
              placeholder={SEARCH_PLACEHOLDER}
              sx={{ flex: 1, px: 2 }}
            />
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
