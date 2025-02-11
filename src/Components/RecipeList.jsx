import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import RentalCard from './RentalCard';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Grid } from '@mui/joy';
import '../RecipeList.css';
import AddRecipeAlert from './AddRecipeAlert'
import { Toolbar } from '@mui/material';
import Footer from './Footer';
import useRecipeListObj from '../Hooks/useRecipeListObj';

export default function RentalDashboard() {
    const arrObj = useRecipeListObj()
    return (
        <>
            <AddRecipeAlert />
            <ResponsiveAppBar />
            <Toolbar />
            <CssVarsProvider disableTransitionOnChange>
                <CssBaseline />
                <Box className="rental-dashboard-container" sx={{ paddingTop: '80px', backgroundColor: 'white'}}>
                    {/* <Stack className="stack">
                    </Stack> */}
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
                    <Footer />
                </Box>
            </CssVarsProvider>
            
        </>
    );
}