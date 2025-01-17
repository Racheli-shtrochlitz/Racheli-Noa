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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from '../img/logo2.png';
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
        color: "#388e3c", // ירוק כהה
        boxShadow: "none", // ללא הצללה
        borderBottom: "1px solid #c5e1a5", // קו תחתון ירוק בהיר
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
            color: "#388e3c", // ירוק כהה
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img
              src={logo} // הכנס את הנתיב של התמונה שלך כאן

              style={{
                height: "80px", // אתה יכול לשנות את הגובה של התמונה בהתאם לעיצוב שלך
                width: "auto", // רוחב מותאם באופן אוטומטי לפי הגובה
              }}
            />
          </Link>
        </Typography>

        {/* תפריט למכשירים גדולים */}
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
                  color: "#388e3c", // ירוק כהה
                  fontSize: "16px",
                  fontWeight: "500",
                  ":hover": {
                    color: "#1b5e20", // ירוק כהה יותר
                    backgroundColor: "#ffffff", // רקע ירוק בהיר
                  },
                  borderBottom: "2px solid transparent", // פס מתחת לכפתור
                  ":hover": {
                    borderBottom: "2px solid #388e3c", // פס ירוק כהה בעת מעבר על הכפתור
                  },
                  borderRadius: 0,

                }}
              >
                {page.label}
              </Button>
            </Link>
          ))}
        </Box>

        {/* תפריט למכשירים קטנים */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            onClick={handleOpenNavMenu}
            sx={{ color: "#388e3c" }}
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
                    color: "#388e3c",
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
          <IconButton onClick={handleOpenUserMenu}>
            <Avatar alt="User"
              sx={{
                backgroundColor: '#E6E1F4', // צבע הרקע
                color: '#FFF', // צבע הטקסט
                width: 40, // גודל
                height: 40, // גודל
                border: '2px solid #FFFFFF', // הוספת מסגרת לבנה
              }}

            > {getInitial(userObj.name)}
            </Avatar>
          </IconButton>
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
                    color: "#388e3c",
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
