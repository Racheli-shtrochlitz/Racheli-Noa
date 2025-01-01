import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['דף הבית', 'מתכונים', 'התחברות'];
const settings = ['הפרופיל שלי', 'חשבון', 'התנתק'];
const pageLinks = ['/', '/RecipeList', '/Login'];
const settingsLinks = ['/profile', '/account', '/logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'rgba(247, 152, 220, 0.9)' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Typography
                            variant="h4"
                            noWrap
                            sx={{
                                fontFamily: 'Cursive, Arial, sans-serif',
                                fontWeight: 'bold',
                                fontSize: '36px',
                                background: 'linear-gradient(90deg, #FF4081, #F06292, #F8BBD0)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                ml: 2,
                                mr: 'auto',
                                textDecoration: 'none',
                                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                ':hover': {
                                    textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
                                },
                            }}
                        >
                            טעימל'ה 💕
                        </Typography>
                    </Link>
                    {/* תפריט בגרסה קטנה (mobile) */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link to={pageLinks[index]} style={{ textDecoration: 'none' }}>
                                        <Typography
                                            sx={{
                                                textAlign: 'center',
                                                fontSize: '18px',
                                                fontFamily: 'Arial, sans-serif',
                                            }}
                                        >
                                            {page}
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* תפריט בגרסה גדולה (desktop) */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page, index) => (
                            <Link to={pageLinks[index]} key={page} style={{ textDecoration: 'none' }}>
                                <Button
                                    sx={{
                                        my: 2,
                                        mx: 1.5,
                                        fontSize: '18px',
                                        textTransform: 'none',
                                        fontFamily: 'Arial, sans-serif',
                                        color: 'white',
                                        background: 'linear-gradient(90deg, #F06292, #F8BBD0)',
                                        borderRadius: '20px',
                                        px: 2,
                                        py: 1,
                                        ':hover': {
                                            background: 'linear-gradient(90deg, #F8BBD0, #F06292)',
                                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                        },
                                    }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    {/* תפריט הגדרות */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="הגדרות משתמש">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="User"
                                    sx={{
                                        backgroundColor: 'rgba(247, 195, 232, 0.9)', // צבע הרקע
                                        color: '#FFF', // צבע הטקסט
                                        width: 40, // גודל
                                        height: 40, // גודל
                                        border: '2px solid #FFFFFF', // הוספת מסגרת לבנה
                                    }}
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting, index) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Link to={settingsLinks[index]} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Typography
                                            sx={{
                                                textAlign: 'center',
                                                fontSize: '16px',
                                                fontFamily: 'Arial, sans-serif',
                                            }}
                                        >
                                            {setting}
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;