import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import '../index.css';

const Skills = () => {
    const categories = [
        { title: 'Frontend', key: 'frontend' },
        { title: 'Backend', key: 'backend' },
        { title: 'Database & Tools', key: 'database' },
        { title: 'Other', key: 'other' }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-content">
                    {categories.map((category, index) => (
                        <motion.div
                            className="skills-category"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3>{category.title}</h3>
                            <div className="skills-list">
                                {skills[category.key].map((skill, skillIndex) => (
                                    <span className="skill-item" key={skillIndex}>{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
