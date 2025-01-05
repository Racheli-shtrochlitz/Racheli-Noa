import React from 'react';
import '../Home.css'; // Assuming you want consistent styling with Home
import { Link } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';

const About = () => {
    return (
        <>
            <ResponsiveAppBar />
            <div className="container">
                <header>
                    <h1 className="welcome-title">אודות האתר</h1>
                </header>
                <main className="about">
                    <section>
                        <h2>החזון שלנו</h2>
                        <p>
                            האתר שלנו נוצר מתוך אהבה לבישול ורצון לשתף את המתכונים הטובים ביותר עם קהילת חובבי הבישול.
                            המטרה שלנו היא להקל עליכם במציאת מתכונים שמתאימים לכל אירוע ולכל מצב רוח.
                        </p>
                    </section>
                    <section>
                        <h2>מה תוכלו למצוא כאן?</h2>
                        <ul>
                            <li>מאגר רחב של מתכונים קלים ומורכבים.</li>
                            <li>מנוע חיפוש נוח למתכונים לפי מרכיבים, סוגי מאכלים, ועוד.</li>
                            <li>השראה למתכונים חדשים ומיוחדים.</li>
                        </ul>
                    </section>
                    <section>
                        <h2>צרו קשר</h2>
                        <p>
                            יש לכם שאלות, הצעות או מתכונים שתרצו לשתף איתנו? אנחנו כאן עבורכם!
                            <Link to="/contact">לחצו כאן לצור קשר</Link>.
                        </p>
                    </section>
                </main>
            </div>
            <footer className="footer">
                <p>
                    © 2024 אתר המתכונים | <Link to="/">דף הבית</Link> | <Link to="/contact">צור קשר</Link>
                </p>
            </footer>
        </>
    );
};

export default About;