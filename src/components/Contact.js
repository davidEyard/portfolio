// src/components/Contact.js
import React from 'react';
import '../styles/contact.css';

function Contact({ isVisible, onClose }) {
    if (!isVisible) return null;

    return (
        <div className="contact-modal">
            <div className="contact-content">
                <button onClick={onClose} className="close-button">X</button>
                <h2>Contact Me</h2>
                <p>Email: davidyard@rocketmail.com</p>
                
                <p>LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">My LinkedIn</a></p>
                <p>GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer">My GitHub</a></p>
                <p>SoundCloud: <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">My created tunes</a></p>
            </div>
        </div>
    );
}

export default Contact;