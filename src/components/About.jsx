import React from 'react';
import '../index.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-image-wrapper">
                        <img src="/profile-image.jpg" alt="Marwane Skaro" className="about-image" />
                    </div>
                    <div className="about-text">
                        <p>
                            Software Engineering Student at Polytechnique of Agadir and Full Stack Developer with 2+ years of professional experience
                            in building scalable web applications. Proficient in modern frontend and backend technologies
                            including React, Vue.js, Django, Laravel, and Symfony.
                        </p>
                        <p>
                            Passionate about creating innovative solutions and continuously learning new technologies.
                            Proven track record of delivering high-quality projects through internships and consulting roles.
                        </p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <h3>24+</h3>
                                <p>GitHub Repositories</p>
                            </div>
                            <div className="stat-item">
                                <h3>2+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat-item">
                                <h3>10+</h3>
                                <p>Technologies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
