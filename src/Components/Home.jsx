import '../Home.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import ChangingText from './ChangingText';
import recipe1 from '../img/recipe1.jpg';
import recipe2 from '../img/recipe2.jpg';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Grid } from '@mui/joy';
import { useEffect } from 'react';

const Home = () => {
    const arrObj = useSelector(x => x.RecipeListSlice);
    const navigate = useNavigate();
    const handleSearch = () => {
        const searchTerm = document.querySelector('.search-box').value;
        if (searchTerm) {
            const element = arrObj.arr.find((recipe) => recipe.name === searchTerm);
            if (element) {
                navigate(`/RecipeDetails/${element.id}`);
            }
        } else {
            alert('נא להזין מילת חיפוש');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const parallax = document.querySelector('.parallax-container');
            const scrollPosition = window.scrollY;
            parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        };

        window.addEventListener('scroll', handleScroll);

        // הסרת מאזין אירועים לאחר סיום השימוש
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <Grid>
            <div className="container">
                <Grid>
                    <header>
                        <ResponsiveAppBar sx={{ zIndex: 10000 }} />
                    </header>
                </Grid>
                <Grid>
                    <main style={{ marginTop: '80px', paddingBottom: '60px', zIndex: 1 }}>
                        <div class="parallax-container">
                            <div class="parallax-content">
                                <Grid>
                                    <h1 className="welcome-title">ברוכים הבאים לאתר המתכונים שלנו!</h1>
                                    <p className="welcome-description">
                                        מצא מתכונים <ChangingText /> שמתאימים לך בקלות.
                                    </p>
                                </Grid>
                            </div>
                        </div>
                        <Grid>
                            {/* <div className="search-box-container">
                                <input
                                    type="text"
                                    className="search-box"
                                    placeholder="חיפוש מתכונים..."
                                />
                                <button className="search-button" onClick={handleSearch}>
                                    <i className="fa fa-search"></i> חפש
                                </button>
                            </div> */}
                        </Grid>
                        <Grid>
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
                        </Grid>
                        <Grid>
                            <section className="about">
                                <h2>קצת עלינו...</h2>
                                <p>ברוכים הבאים ל"לבריאות" – האתר שמביא את עולם המתכונים הבריאים אליכם, בצורה פשוטה, טעימה ומלאת השראה. אצלנו תגלו איך להפוך את האוכל שלכם לבריא יותר, מבלי להתפשר על הטעם או האסתטיקה של המנות.</p>
                                <p>האתר "לבריאות" נבנה מתוך חזון לעודד אורח חיים בריא, ולהוכיח שאפשר לשלב תזונה נכונה, גיוון קולינרי והנאה אמיתית מהאוכל. אצלנו תוכלו למצוא מתכונים עשירים בסיבים תזונתיים, ויטמינים, חלבונים ושומנים בריאים – כולם מותאמים לאנשים שאכפת להם ממה שהם מכניסים לגוף שלהם.</p>
                                <p><strong>מה תוכלו למצוא באתר?</strong></p>
                                <ul>
                                    <li>סלטים ייחודיים ומפתיעים – מרעננים את שולחן האוכל עם שילובים יצירתיים של ירקות, עלים ירוקים, דגנים וקטניות.</li>
                                    <li>מתכונים קלים ומהירים – פתרונות לארוחות קלות ומזינות לכל הזדמנות.</li>
                                    <li>מנות לחובבי קולינריה בריאה – מתכונים מורכבים שיפתיעו את האורחים שלכם.</li>
                                    <li>השראה לאורח חיים בריא – טיפים לתזונה נכונה וערכים תזונתיים.</li>
                                </ul>
                                <p><strong>למה לבחור ב"לבריאות"?</strong></p>
                                <ul>
                                    <li>התאמה לכל סוגי התזונה – צמחונים, טבעונים, חובבי אוכל ללא גלוטן ועוד.</li>
                                    <li>חוויה אסתטית – כל מתכון מלווה בתמונות מושקעות וטעימות.</li>
                                    <li>גישה בת-קיימא – דגש על שימוש בחומרי גלם עונתיים וטריים.</li>
                                </ul>
                            </section>
                        </Grid>
                    </main>
                </Grid>
                <Grid>
                    <footer className="footer">
                        <p>
                            © 2024 אתר המתכונים | <Link to="/about">אודות</Link> | <Link to="/contact">צור קשר</Link>
                        </p>
                    </footer>
                </Grid>

            </div>

        </Grid>
    );

};


export default Home;
