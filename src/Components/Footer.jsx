import { Link } from "react-router-dom";
import '../Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <p>
                    © 2024 אתר המתכונים | <Link to="/">דף הבית</Link> | <Link to="/contact">צור קשר</Link> | <Link to="/about">אודות</Link>
                </p>
            </footer>
        </>
    );
}

export default Footer