import './Home.css';
import './AppBar';
import ResponsiveAppBar from './AppBar';

const Home = () => {
    return (
        <div className="container">
            <ResponsiveAppBar />
            
            {/* Search Box */}
            <div className="search-box-container">
                <input
                    type="text"
                    className="search-box"
                    placeholder="חיפוש מתכונים..."
                />
                <button className="search-button">חפש</button>
            </div>
        </div>
    );
};

export default Home;