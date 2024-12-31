import React, { useEffect, useState } from 'react';

const ChangingText = () => {
    const words = ['טעימים ', 'בריאים ', 'מהירים '];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return <span className="changing-text">{words[currentWordIndex]}</span>;
}

export default ChangingText;