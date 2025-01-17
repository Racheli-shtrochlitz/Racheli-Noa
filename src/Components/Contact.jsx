import React from 'react';
import '../Contact.css';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Toolbar } from '@mui/material';
import Footer from './Footer';

const Contact = () => {
    return (
        <>
            <div className="contact-container">
                <ResponsiveAppBar />
                <Toolbar />
                <h1 className="contact-title">צור קשר</h1>
                <p className="contact-description">נשמח לשמוע ממך! אנא מלא את הפרטים בטופס ונחזור אליך בהקדם.</p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">שם מלא:</label>
                        <input type="text" id="name" name="name" placeholder="הזן את שמך" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">אימייל:</label>
                        <input type="email" id="email" name="email" placeholder="הזן את האימייל שלך" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">הודעה:</label>
                        <textarea id="message" name="message" rows="5" placeholder="כתוב את הודעתך כאן" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">שלח</button>
                </form>
            </div>
            <Footer/>
        </>
    );
};

export default Contact;