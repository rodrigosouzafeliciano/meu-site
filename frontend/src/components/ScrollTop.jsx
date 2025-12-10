import React, { useState, useEffect } from 'react';

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div
            className={`scroll-top ${isVisible ? 'active' : ''}`}
            onClick={scrollToTop}
        >
            <i className="fas fa-chevron-up"></i>
        </div>
    );
};

export default ScrollTop;
