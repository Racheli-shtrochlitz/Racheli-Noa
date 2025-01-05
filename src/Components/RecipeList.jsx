import * as React from 'react';
import { CssVarsProvider, ThemeProvider, extendTheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import RentalCard from './RentalCard';
import { useSelector, useDispatch } from "react-redux"
import ResponsiveAppBar from './ResponsiveAppBar';
import { Grid } from '@mui/joy';
import { Link } from 'react-router-dom';
import AddRecipeAlert from './AddRecipeAlert';
import '../Home.css';
import '../RecipeList.css';
export default function RentalDashboard() {
    const dispatch = useDispatch();
    const arrObj = useSelector(x => x.RecipeListSlice);
    return (
        <>
            <AddRecipeAlert />
            <ResponsiveAppBar />
            <CssVarsProvider disableTransitionOnChange>
                <CssBaseline />
                <Box className="rental-dashboard-container">
                    <Stack className="stack">
                    </Stack>
                    <Box className="background-image-box" />
                    <Stack spacing={2} className="content-stack">
                        <Grid container spacing={2}>
                            {arrObj.arr.map((element) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={element.id} className="recipe-grid-item">
                                        <RentalCard
                                            index={element.id} // מזהה המתכון
                                            title={element.name} // שם המתכון
                                            category={element.category} // קטגוריית המתכון
                                            time={element.time} // זמן הכנה
                                            products={element.products} // רכיבים
                                            instructions={element.instructions} // הוראות הכנה
                                            image={element.image && element.image.startsWith("data:image") // אם התמונה ב-Base64
                                                ? element.image // הצג את ה-Base64 כפי שהוא
                                                : element.image ? require(`../img/${element.image}.jpg`) : '' // אחרת הצג את התמונה מהתיקייה אם יש, אחרת הצג כלום
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

