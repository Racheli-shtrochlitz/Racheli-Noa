
// import * as React from 'react';
// import { CssVarsProvider, ThemeProvider } from '@mui/joy/styles';
// import CssBaseline from '@mui/joy/CssBaseline';
// import Box from '@mui/joy/Box';
// import Stack from '@mui/joy/Stack';
// //import NavBar from './components/NavBar';
// import RentalCard from './RentalCard';
// //import HeaderSection from './components/HeaderSection';
// //import Search from './components/Search';
// //import Filters from './components/Filters';
// import Pagination from './Pagination';
// import { AddRecipe } from '../Store/RecipeListSlice'
// import { useSelector, useDispatch } from "react-redux"
// import ResponsiveAppBar from './AppBar';
// export default function RentalDashboard() {
//     const dispatch = useDispatch()
//     const arrObj = useSelector(x => x.RecipeListSlice)
//     const theme = createTheme({
//         palet: {
//           background: {
//             default: '#ffffff', // זה מגדיר את ברירת המחדל של Bg
//             paper: '#ffffff',
//           },
//           primair: {
//             main: '#1976d2',
//           },
//           secondary: {
//             main : '#dc004e',
//           },
//         },
//       });
//     return (
//         <CssVarsProvider disableTransitionOnChange>
//             <CssBaseline />
//             {/* <NavBar /> */}
//             <ThemeProvider theme={theme}><ResponsiveAppBar/></ThemeProvider>
//             <Box
//                 component="main"
//                 sx={{
//                     height: 'calc(100vh - 55px)', // 55px is the height of the NavBar
//                     display: 'grid',
//                     gridTemplateColumns: { xs: 'auto', md: '60% 40%' },
//                     gridTemplateRows: 'auto 1fr auto',
//                 }}
//             >
//                 <Stack
//                     sx={{
//                         backgroundColor: 'background.surface',
//                         px: { xs: 2, md: 4 },
//                         py: 2,
//                         borderBottom: '1px solid',
//                         borderColor: 'divider',
//                     }}
//                 >
//                     {/* <HeaderSection /> */}
//                     {/* <Search /> */}
//                 </Stack>
//                 <Box
//                     sx={{
//                         gridRow: 'span 3',
//                         display: { xs: 'none', md: 'flex' },
//                         backgroundColor: 'background.level1',
//                         backgroundSize: 'cover',
//                         backgroundImage:
//                             'url("https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3731&q=80")',
//                     }}
//                 />
//                 <Stack spacing={2} sx={{ px: { xs: 2, md: 4 }, pt: 2, minHeight: 0 }}>
//                     {/* <Filters /> */}
                   
//                     <Stack spacing={2} sx={{ overflow: 'auto' }}>
//                         {arrObj.arr.map(element => (
//                             <RentalCard
//                             star={element.star}
//                                 index={element.id}
//                                 title={element.name}
//                                 category={element.category}
//                                 // rareFind
//                                 image='../img/1.jpg'
//                             />
//                             ))}
//                     </Stack>
//                 </Stack>
//                 <Pagination />
//             </Box>
//         </CssVarsProvider>
//     );
// }







import * as React from 'react';
import { CssVarsProvider, ThemeProvider, extendTheme } from '@mui/joy/styles'; // השתמש ב-extendTheme כאן
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import RentalCard from './RentalCard';
import Pagination from './Pagination';
import { useSelector, useDispatch } from "react-redux"
import ResponsiveAppBar from './ResponsiveAppBar';
import zIndex from '@mui/material/styles/zIndex';
import { Grid } from '@mui/joy';
import { Link } from 'react-router-dom';
export default function RentalDashboard() {
    const dispatch = useDispatch();
    const arrObj = useSelector(x => x.RecipeListSlice);
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            {/* <ResponsiveAppBar  /> */}
            <Box >
                <Stack
                    sx={{
                        backgroundColor: 'background.surface',
                        px: { xs: 2, md: 4 },
                        py: 2,
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    {/* <HeaderSection /> */}
                    {/* <Search /> */}
                </Stack>
                <Box
                    sx={{
                        gridRow: 'span 3',
                        display: { xs: 'none', md: 'flex' },
                        backgroundColor: 'background.level1',
                        backgroundSize: 'cover',
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3731&q=80")',
                    }}
                />


                
               

                <Stack spacing={2} sx={{ px: { xs: 2, md: 4 }, pt: 2, minHeight: 0 }}>
    {/* <Filters /> */}
    <Grid container spacing={2}>
        {arrObj.arr.map((element) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={element.id}>
                 <Link to={`/RecipeDetails/${element.id}`} style={{ textDecoration: 'none' }}> {/* הוספת קישור */}
                    <RentalCard
                        star={element.star}
                        index={element.id}
                        title={element.name}
                        category={element.category}
                        image={require(`../img/${element.id}.jpg`)} 
                    />
                </Link>
            </Grid>
        ))}
    </Grid>
</Stack>
                <Pagination />
            </Box>
        </CssVarsProvider>
    );
}









