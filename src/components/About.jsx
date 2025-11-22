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
                            I'm a Software Engineering Student at Polytechnique of Agadir (2020-2025) with a passion for creating innovative
                            web solutions. With expertise in both frontend and backend technologies,
                            I enjoy building full-stack applications that solve real-world problems.
                        </p>
                        <p>
                            My journey in software development has taken me through various internships
                            where I've worked with cutting-edge technologies like Laravel, Django,
                            Symfony, Vue.js, and many others. I'm always eager to learn new technologies
                            and contribute to meaningful projects.
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
