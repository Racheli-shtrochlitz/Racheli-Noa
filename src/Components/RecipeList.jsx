import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import RentalCard from './RentalCard';
import { useSelector, useDispatch, Provider } from "react-redux"
 import ResponsiveAppBar from './ResponsiveAppBar';
import { Grid } from '@mui/joy';
import { Link, useNavigate } from 'react-router-dom';
import '../RecipeList.css';
import AddRecipeAlert from './AddRecipeAlert'
import { Toolbar } from '@mui/material';

export default function RentalDashboard() {
    const dispatch = useDispatch();
    const arrObj = useSelector(x => x.RecipeListSlice);
    return (
        <>
           <AddRecipeAlert />
            <ResponsiveAppBar />
            <Toolbar />
            <CssVarsProvider disableTransitionOnChange>
                <CssBaseline />
                <Box className="rental-dashboard-container" sx={{ paddingTop: '80px', }}>
                    <Stack className="stack">
                    </Stack>
                    <Box className="background-image-box" />
                    <Stack spacing={2} className="content-stack">
                        <Grid container spacing={2}>
                            {arrObj.arr.map((element) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={element.id} className="recipe-grid-item">
                                    <RentalCard
                                        index={element.id}
                                        title={<div className="title">{element.name}</div>}
                                        category={
                                            <div className="details">
                                                🍴 קטגוריה: {element.category} <br />
                                                ⏱ זמן הכנה: {element.time}
                                            </div>
                                        }
                                        time={null}
                                        products={element.products}
                                        instructions={element.instructions}
                                        image={
                                            element.image && element.image.startsWith("data:image")
                                                ? element.image
                                                : element.image
                                                    ? require(`../img/${element.image}.jpg`)
                                                    : ''
                                        }
                                        className="recipe-card"
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                </Box>
            </CssVarsProvider>
            <footer className="footer">
                <p>
                    © 2024 אתר המתכונים | <Link to="/">דף הבית</Link> | <Link to="/contact">צור קשר</Link>
                </p>
            </footer>
        </>
    );
}

