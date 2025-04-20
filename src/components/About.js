// src/components/About.js
import React from 'react';
import '../styles/about.css';

function About({ isVisible, onClose }) {
    if (!isVisible) return null;

    return (
        <div className="about-modal">
            <div className="about-content">
                <button onClick={onClose} className="close-button">X</button>
                <h2>About Me</h2>
                <p>
                    Hello! My name is David Yard, I’m a dedicated musician, and programmer based in Seattle, Washington.
                    My goals with this app are to showcase my skills in web development, interactive media, and
                 music production. With experience in HTML, CSS, JavaScript, React, and Python, I aim 
                    to create dynamic and engaging digital experiences. Let’s explore new possibilities together!
                </p>

            </div>
        </div>
    );
}

export default About;