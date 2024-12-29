import './Home.css';
import image1 from '../img/1.jpg';

const Home = () => {
    return (
        <div className="container">
            <img src={image1} alt="תמונה ראשית אתר מתכונים" className="center-image" />
        </div>
    )
}

export default Home