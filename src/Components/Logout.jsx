import React from 'react';
import '../Logout.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { logout } from '../Store/UserSlice'; 

const Logout = () => {
    const dispatch = useDispatch(); // הפעלת useDispatch כאן

    const handleLogout = () => {
        dispatch(logout); 
        window.location.href = '/'; // הפניה לדף הבית
    };

    return (
        <>
            <ResponsiveAppBar />
            <div className="logout-container">
                <div className="logout-box">
                    <h1>התנתקת בהצלחה</h1>
                    <p>תודה שהשתמשת בשירות שלנו. אנו מקווים לראותך שוב בקרוב!</p>
                    <button className="logout-button" onClick={handleLogout}>
                        חזרה לדף הבית
                    </button>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Logout;
