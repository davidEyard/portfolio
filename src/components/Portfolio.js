// src/components/Portfolio.js
import React from 'react';
import '../styles/portfolio.css';

function Portfolio({ isVisible, onClose }) {
    if (!isVisible) return null;

    const projects = [
        {
            title: "Website Design",
            description: "A basic website layout for a business.",
            link: "https://davideyard.github.io/Basic-Pizza-Design/" // Example link
        },
        {
            title: "Cyberpunk Clock",
            description: "A simple clock made with HTML/CSS/JS",
            link: "https://davideyard.github.io/cyber_clock/"
        },
        {
            title: "JavaScript Chicken Crossing Game",
            description: "Github - see README",
            link: "https://github.com/davidEyard/Ultra-Human-Chicken-Crossing"
        },
        // Additional project placeholders
    ];

    return (
        <div className="portfolio-modal">
            <div className="portfolio-content">
                <button onClick={onClose} className="close-button">X</button>
                <h2>Portfolio</h2>
                <div className="project-scroll">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </div>
                    ))}
                    <p className="more-projects">More Projects are on the way!</p>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;