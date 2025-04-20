// src/components/Business.js
import React, { useState } from 'react';
import '../styles/business.css';

function Business({ onOpenPortfolio }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <section
            id="business"
            className={`section ${isExpanded ? 'expanded' : ''}`}
            onClick={() => !isExpanded && toggleExpand()}
        >
            <h2>Business</h2>
            {isExpanded && (
                <div className="business-content" onClick={(e) => e.stopPropagation()}>
                    <button onClick={toggleExpand} className="close-button">X</button>
                    <p>Explore my skills in web development, programming, and interactive media.</p>
                    <ul className="skills-list">
                        <li>React Development for Websites and Web Apps</li>
                        <li>HTML & CSS for Responsive Design</li>
                        <li>JavaScript for Dynamic Interactivity</li>
                        <li>Music Production for Digital and Custom Projects</li>
                        <li>Visual Creation with Synesthesia for Music-Responsive Visuals</li>
                    </ul>
                    <button onClick={onOpenPortfolio} className="portfolio-link">View My Portfolio</button>
                </div>
            )}
        </section>
    );
}

export default Business;