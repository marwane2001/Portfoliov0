import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import '../index.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <p className="greeting">Hello, I'm</p>
                        <h1 className="hero-title">
                            <span className="gradient-text">Marwane Skaro</span>
                        </h1>
                        <h2 className="hero-subtitle">Full Stack Developer</h2>
                        <p className="hero-description">
                            Passionate software engineer specializing in building scalable web applications
                            with modern technologies. Transforming ideas into digital solutions.
                        </p>
                        <div className="hero-buttons">
                            <a href="#projects" className="btn btn-primary">View Projects</a>
                            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                            <a href="/resume.pdf" download="Marwane_Skaro_Resume.pdf" className="btn btn-secondary">Download Resume</a>
                        </div>
                        <div className="social-links">
                            <a href="https://github.com/marwane2001" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/marwane-skaro-618971239" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="#contact" aria-label="Email">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="image-wrapper">
                            <div className="profile-image-container">
                                <img src="/profile-image.jpg" alt="Marwane Skaro" className="profile-image" />
                                <div className="image-border"></div>
                                <div className="floating-shapes">
                                    <div className="shape shape-1"></div>
                                    <div className="shape shape-2"></div>
                                    <div className="shape shape-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <a href="#about">
                    <FaChevronDown />
                </a>
            </div>
        </section>
    );
};

export default Hero;
