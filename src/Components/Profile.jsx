import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Profile.css';
import '../Home.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import { useSelector } from 'react-redux';
const Profile = () => {
  const userObj = useSelector(x => x.UserSlice);
  return (
    <>
      <ResponsiveAppBar />
      <div className="profile-container">
        <div className="profile-header">
          <h1>שלום, {userObj.name}</h1>
          <p>ברוך הבא לפרופיל שלך!</p>
        </div>

        <div className="profile-details">
          <div className="profile-image">
          </div>

          <div className="profile-info">
            <p><strong>שם מלא:</strong> {userObj.email}</p>
            <p><strong>דוא"ל:</strong> {userObj.password}</p>
          </div>
        </div>

        <div className="profile-actions">
          <button>ערוך פרופיל</button>
          <Link to="/recipelist">
            <button>יציאה</button>
          </Link>
        </div>
      </div>
      <footer className="footer">
        <p>
          © 2024 אתר המתכונים | <Link to="/">דף הבית</Link> | <Link to="/contact">צור קשר</Link>
        </p>
      </footer>
    </>
  );
};

export default Profile;
