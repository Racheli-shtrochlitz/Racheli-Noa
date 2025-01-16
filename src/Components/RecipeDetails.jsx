import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';
import '../Home.css';
import '../RecipeDetails.css';
import { Toolbar } from '@mui/material';

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
      <div className="recipe-container">
        <div className="recipe">
          <h1>{element.name}</h1>
          <div className="recipe-image">
            {imageSrc ? (
              <img src={imageSrc} alt={element.name} />
            ) : (
              <p>תמונה לא זמינה</p>
            )}
          </div>
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
      <footer className="footer">
        <p>
          © 2024 אתר המתכונים | <Link to="/">דף הבית</Link> | <Link to="/contact">צור קשר</Link>
        </p>
      </footer>
    </>
  );
}
