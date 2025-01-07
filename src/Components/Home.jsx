import '../Home.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import ChangingText from './ChangingText';
import recipe1 from '../img/recipe1.jpg';
import recipe2 from '../img/recipe2.jpg';
import zIndex from '@mui/material/styles/zIndex';
import { Router, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Home = () => {
    const arrObj = useSelector(x => x.RecipeListSlice);
    const navigate = useNavigate();
    const handleSearch = () => {
        const searchTerm = document.querySelector('.search-box').value;
        if (searchTerm) {
           const element=arrObj.arr.find((recipe) => recipe.name === searchTerm);
           if (element) {
                navigate(`/RecipeDetails/${element.id}`)}
        } else {
            alert('נא להזין מילת חיפוש');
        }
    };

    return (
        <div className="container">
            <header>
                <ResponsiveAppBar sx={{ zIndex: 10000 }} />
            </header>
            <main style={{ marginTop: '80px', paddingBottom: '60px', zIndex: 1 }}>
                <h1 className="welcome-title">ברוכים הבאים לאתר המתכונים שלנו!</h1>
                <p className="welcome-description">
                    מצא מתכונים <ChangingText /> שמתאימים לך בקלות.
                </p>
                <div className="search-box-container">
                    <input
                        type="text"
                        className="search-box"
                        placeholder="חיפוש מתכונים..."
                    />
                    <button className="search-button" onClick={handleSearch}>
                        <i className="fa fa-search"></i> חפש
                    </button>
                </div>
                <br />  <br />  <br />  <br />  <br />  <br />  <br />
                <br />  <br />  <br />  <br />  <br />  <br />  <br />
                <div className="popular-recipes">
                    <h2>מתכונים פופולריים</h2>
                    <div className="recipe-cards">
                        <div className="recipe-card">
                            <img src={recipe1} alt="Recipe 1" />
                            <p>עוגת גבינה</p>
                        </div>
                        <div className="recipe-card">
                            <img src={recipe2} alt="Recipe 2" />
                            <p>מאפינס</p>
                        </div>
                    </div>
                </div>
                <section className="about">
                    <h2>על האתר</h2>
                    <p>האתר שלנו מיועד לחובבי בישול שרוצים למצוא מתכונים קלים ומהירים לכל הזדמנות.</p>
                </section>
            </main>
            <footer className="footer">
                <p>
                    © 2024 אתר המתכונים | <Link to="/about">אודות</Link> | <Link to="/contact">צור קשר</Link>
                </p>
            </footer>
        </div>
    );
};

export default Home;
