import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header style={{
            padding: isScrolled ? '10px 0' : '15px 0',
            background: isScrolled ? 'rgba(62, 39, 35, 0.98)' : 'linear-gradient(to bottom, rgba(62, 39, 35, 0.95) 0%, rgba(62, 39, 35, 0.85) 100%)'
        }}>
            <div className="header-container">
                <div className="logo">
                    <div className="logo-text">RG <span className="logo-highlight">MÓVEIS RÚSTICOS</span></div>
                </div>
                <button
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav>
                    <ul className={isMenuOpen ? 'active' : ''}>
                        <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Início</a></li>
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Sobre</a></li>
                        <li><a href="#collections" onClick={(e) => { e.preventDefault(); scrollToSection('collections'); }}>Coleções</a></li>
                        <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}>Processo</a></li>
                        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contato</a></li>
                    </ul>
                </nav>
                <div className="contact-header">
                    <i className="fas fa-phone"></i> (48) 9 9185-8402
                </div>
            </div>
        </header>
    );
};

export default Header;
