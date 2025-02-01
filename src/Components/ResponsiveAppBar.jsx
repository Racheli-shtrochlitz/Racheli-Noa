import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
  Avatar,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from '../img/333.png';
import { useSelector } from "react-redux";
import Favorite from "./Favorite";
const pages = [
  { label: "דף הבית", link: "/" },
  { label: "מתכונים", link: "/RecipeList" },
  { label: "התחברות", link: "/Login" },
];

const settings = [
  { label: "הפרופיל שלי", link: "/profile" },
  { label: "חשבון", link: "/account" },
  { label: "התנתק", link: "/logout" },
];

const ResponsiveAppBar = () => {
  const userObj = useSelector(x => x.UserSlice);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getInitial = (name) => {
    if (!name) return '?';
    return name.trim()[0].toUpperCase();
  };
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#ffffff", // לבן
        color: "#412948", 
        boxShadow: "none", 
        borderBottom: "1px solid #412948", 
        position: "fixed",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: "24px",
            fontFamily: "Arial, sans-serif",
            color: "#388e3c", 
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img
              src={logo} 

              style={{
                height: "80px", 
                width: "auto",
              }}
            />
          </Link>
        </Typography>

        {/*תפריט דפים*/}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {pages.map((page) => (
            <Link
              key={page.label}
              to={page.link}
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                sx={{
                  color: "primary.main", 
                  fontSize: "16px",
                  fontWeight: "500",
                  ":hover": {
                    color: "#FFF", 
                    backgroundColor: "#FFF",
                  },
                  borderBottom: "2px solid transparent", 
                  ":hover": {
                    borderBottom: "2px solid #4A154B", 
                  },
                  borderRadius: 0,

                }}
              >
                {page.label}
              </Button>
            </Link>
          ))}
        </Box>

        {/* תפריט דפים*/}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            onClick={handleOpenNavMenu}
            sx={{ color: "#4A154B" }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((page) => (
              <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                <Link
                  to={page.link}
                  style={{
                    textDecoration: "none",
                    color: "#4A154B",
                    fontSize: "16px",
                  }}
                >
                  {page.label}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* תפריט משתמש */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center', // יישור אנכי של הפריטים
          justifyContent: 'flex-end', // יישור לצד ימין
          gap: 1.5, // רווח בין האייקונים
        }}>
          <Favorite />
          <Tooltip title="משתמש">
          <IconButton onClick={handleOpenUserMenu}>
            <Avatar alt="User"
              sx={{
                backgroundColor: '#FFF', // צבע הרקע
                color: 'primary.main', // צבע הטקסט
                width: 40,
                height: 40, 
                border: '2px solid #4A154B', // הוספת מסגרת   סגולה
              }}

            > {getInitial(userObj.name)}
            </Avatar>
          </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                <Link
                  to={setting.link}
                  style={{
                    textDecoration: "none",
                    color: "#4A154B",
                    fontSize: "16px",
                  }}
                >
                  {setting.label}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;
