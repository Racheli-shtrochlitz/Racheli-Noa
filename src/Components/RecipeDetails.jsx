import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';
import '../Home.css';
import '../RecipeDetails.css';
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
  ? element.image.startsWith("data:image") // אם התמונה ב-Base64
    ? element.image // הצג את ה-Base64 כפי שהוא
    : (() => {
        try {
          return require(`../img/${element.image}.jpg`); // נסה לטעון מתוך התיקייה
        } catch (error) {
          return ''; // אם לא נמצא קובץ, החזר ריק
        }
      })()
  : ''; // ברירת מחדל אם אין תמונה


  return (
    <>
      <ResponsiveAppBar />

      <div className="recipe">
        <h1>{element.name}</h1>

        {/* הצגת התמונה */}
        <div>
          {imageSrc ? (
            <img src={imageSrc} alt={element.name} />
          ) : (
            <p>תמונה לא זמינה</p>
          )}
        </div>

        <p className="time">זמן הכנה: {element.time}</p>
        <p className="category">קטגוריה: {element.category}</p>

        <p><strong>רכיבים:</strong></p>
        <ul>
          {element.products.map((products, index) => (
            <li key={index}>{products}</li>
          ))}
        </ul>

        <p><strong>הוראות הכנה:</strong></p>
        <div className="instructions">
          <ul>
            {element.instructions.map((instructions, index) => (
              <li key={index}>{instructions}</li>
            ))}
          </ul>
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