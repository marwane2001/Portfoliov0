import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';
import '../index.css';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid" id="projectsGrid">
                    {projects.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="project-image">
                                <span>{project.icon}</span>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span className="project-tag" key={tagIndex}>{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaGithub />
                                        <span>View Code</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
