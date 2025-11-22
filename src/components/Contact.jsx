import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import '../index.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <motion.div
                    className="contact-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="contact-description">
                        I'm always open to discussing new projects, creative ideas, or opportunities
                        to be part of your visions. Feel free to reach out!
                    </p>
                    <div className="contact-info">
                        <a href="mailto:marwanebenhadj@gmail.com" className="contact-item">
                            <FaEnvelope />
                            <span>Email Me</span>
                        </a>
                        <a href="https://www.linkedin.com/in/marwane-skaro-618971239" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/marwane2001" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                        <a href="https://portfoliov0-krfbwvi59-marwane2001s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <FaGlobe />
                            <span>Portfolio</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
