// src/App.js

import React, { useState } from 'react';
import './styles/App.css';
import './styles/music.css';
import './styles/business.css';
import './styles/portfolio.css';
import './styles/about.css';
import './styles/contact.css';
import Music from './components/Music';
import Business from './components/Business';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import react_logo from './assets/react_logo.jpg';
import logo from './assets/cham_logo.png';

function App() {
    const [isPortfolioVisible, setPortfolioVisible] = useState(false);
    const [isAboutVisible, setAboutVisible] = useState(false);
    const [isContactVisible, setContactVisible] = useState(false);

    const handleOpenPortfolio = () => setPortfolioVisible(true);
    const handleClosePortfolio = () => setPortfolioVisible(false);
    const handleOpenAbout = () => setAboutVisible(true);
    const handleCloseAbout = () => setAboutVisible(false);
    const handleOpenContact = () => setContactVisible(true);
    const handleCloseContact = () => setContactVisible(false);

    return (
        <div className="app-container">
            
            <header className="header">
                <h1>
                    <span className="main-title">David Yard | 
                        <img src={logo} alt="Logo" className="logo" />
                    </span>
                    <span className="tagline">Creates: Sound & Code</span>
                </h1>
                <nav className="nav-links">
                    <a href="#portfolio" onClick={(e) => { e.preventDefault(); handleOpenPortfolio(); }}>Portfolio</a>
                    <a href="#about" onClick={(e) => { e.preventDefault(); handleOpenAbout(); }}>About Me</a>
                </nav>
            </header>

            <div className="main-content">
                <section id="music" className="section">
                    <Music />
                </section>
                
                <section id="business" className="section">
                    <Business onOpenPortfolio={handleOpenPortfolio} />
                </section>

                <section id="portfolio" className="section portfolio-preview" onClick={(e) => { e.stopPropagation(); handleOpenPortfolio(); }}>
                    <h2>Portfolio</h2>
                </section>

                <section id="about" className="section" onClick={(e) => { e.stopPropagation(); handleOpenAbout(); }}>
                    <h2>About Me</h2>
                </section>

                <Portfolio isVisible={isPortfolioVisible} onClose={handleClosePortfolio} />
                <About isVisible={isAboutVisible} onClose={handleCloseAbout} />
                <Contact isVisible={isContactVisible} onClose={handleCloseContact} />

                {/* Spacer div to push footer down when there’s extra space */}
                <div className="spacer"></div>
            </div>

            <footer className="footer">
                <p>© 2024 DY Cr8s | <img src={react_logo} alt="React Logo" className="react_logo" /></p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/davideyard/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/davidEyard" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); handleOpenContact(); }}>Contact</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
