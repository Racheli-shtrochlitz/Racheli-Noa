import { motion } from 'framer-motion';
import React from 'react'; 
const ChangingText = () => {
    const phrases = ["בריאים", "טעימים", "מזינים", "טריים"];
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 2000); // שנה כל 2 שניות

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
        >
            {phrases[index]}
        </motion.div>
    );
};

export default ChangingText;
