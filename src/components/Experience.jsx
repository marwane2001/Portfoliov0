import React from 'react';
import { experience } from '../data/experience';
import '../index.css';

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    {experience.map((job, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{job.title}</h3>
                                    <span className="timeline-company">{job.company}</span>
                                    <span className="timeline-date">{job.date}</span>
                                </div>
                                <p className="timeline-location">{job.location}</p>
                                <div className="timeline-tags">
                                    {job.tags.map((tag, tagIndex) => (
                                        <span className="tag" key={tagIndex}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
