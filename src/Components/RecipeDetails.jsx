import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';
import '../Home.css';
import '../RecipeDetails.css';
import { CssBaseline, Toolbar } from '@mui/material';
import Footer from './Footer';
import { Box } from '@mui/system';
import { CssVarsProvider } from '@mui/joy';

export default function RecipeDetails() {
  const { id } = useParams();
  const arrObj = useSelector((state) => state.RecipeListSlice);
  const defaultElement = {
    id: 0,
    name: "ללא שם",
    image: "",
    time: "לא צוין זמן",
    category: "לא צוין קטגוריה",
    products: [],
    instructions: [],
  };

  const element = Object.assign({}, defaultElement, arrObj.arr.find((recipe) => recipe.id === parseInt(id)) || {});

  let imageSrc = element.image
    ? element.image.startsWith("data:image")
      ? element.image
      : (() => {
        try {
          return require(`../img/${element.image}.jpg`);
        } catch (error) {
          return '';
        }
      })()
    : '';

  return (
    <>
      <ResponsiveAppBar />
      <Toolbar />
      <CssVarsProvider disableTransitionOnChange>
        <CssBaseline />
        <div className="recipe-container">
          <Box sx={{
            display: 'flex',
            //  justifyContent: 'center',
            // alignItems: 'center',
            width: '50%',
            height: 'auto',
            // textAlign: 'center',
            padding: '20px',
          }}>
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={element.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            ) : (
              <p>תמונה לא זמינה</p>
            )}
          </Box>


          <div className="recipe-details-container">
            <h1>{element.name}</h1>
            <div className="recipe-details">
              <p className="time">⏱ זמן הכנה: {element.time}</p>
              <p className="category">🍴 קטגוריה: {element.category}</p>
            </div>
            <div className="recipe-ingredients">
              <h2>רכיבים</h2>
              <ul>
                {element.products.map((product, index) => (
                  <li key={index}>{product}</li>
                ))}
              </ul>
            </div>
            <div className="recipe-instructions">
              <h2>הוראות הכנה</h2>
              <ul>
                {element.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Footer />
      </CssVarsProvider>
    </>
  );
}