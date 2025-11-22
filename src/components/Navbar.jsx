import React, { useState, useEffect } from 'react';
import '../index.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container">
                <div className="nav-wrapper">
                    <a href="#home" className="logo" onClick={closeMenu}>MS</a>
                    <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
                        <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
                        <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
                        <li><a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a></li>
                        <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
                        <li><a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a></li>
                        <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
                    </ul>
                    <button
                        className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                        id="hamburger"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
