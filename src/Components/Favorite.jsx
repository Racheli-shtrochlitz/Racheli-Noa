import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { Box, Menu, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Favorite = () => {
    const navigate = useNavigate();

    const handleNavigation = (id) => {
        navigate(`/RecipeDetails/${id}`);
    };
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const arrObj = useSelector(x => x.RecipeListSlice);
    const arr = [];
    arrObj.arr.map((element) => {
        if (element.like === true) {
            arr.push(element);
        }
    });
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    return (
        <>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="מועדפים">
                    <FavoriteIcon
                        onClick={handleOpenUserMenu}
                        sx={{
                            color: 'primary.main', // צבע הלב
                            fontSize: 40, // גודל הלב
                            WebkitTextStroke: '2px secondary.main', // מסגרת סביב הלב
                            WebkitTextFillColor: 'white', // צבע המילוי
                        }}
                    />

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
                    {arr && arr.length > 0 ? (arr.map((element) => (
                        <MenuItem key={element.id} onClick={() => { handleCloseUserMenu(); handleNavigation(element.id); }}>                            <Typography
                            sx={{
                                textAlign: 'center',
                                fontSize: '16px',
                                fontFamily: 'Arial, sans-serif',
                            }}
                        >
                            {element.name}
                        </Typography>
                        </MenuItem>
                    ))
                    ) : (

                        <Typography
                            sx={{
                                textAlign: 'center',
                                fontSize: '16px',
                                fontFamily: 'Arial, sans-serif',
                            }}
                        >
                            אין מועדפים
                        </Typography>
                    )}
                </Menu>
            </Box>



        </>
    );
};
export default Favorite
