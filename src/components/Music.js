// src/components/Music.js
import React, { useState } from 'react';
import '../styles/music.css';
import mySong from '../assets/BioHazard.mp3';

function Music() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <section
            id="music"
            className={`section ${isExpanded ? 'expanded' : ''}`}
            onClick={() => !isExpanded && toggleExpand()} 
        >
            <h2>Music</h2>
            {isExpanded && (
                <div className="music-content" onClick={(e) => e.stopPropagation()}>
                    <p>Hey there! Thanks for stopping by to listen. I’ve put a lot into creating these sounds, and I hope they bring a cool vibe to your day. You can check out one track right here, or dive into more on SoundCloud below. Enjoy the music!</p>
                    <p className="neon-blue">3D-Y : BioHazard</p>
                    <button onClick={toggleExpand} className="close-button">X</button>
                    <audio controls>
                        <source src={mySong} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <p>Or check out my SoundCloud below for more music.</p>
                    <iframe 
                        title="3D-Y SoundCloud Player" /* Added title for accessibility */
                        width="100%" 
                        height="166" 
                        allow="autoplay" 
                        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/3d-y/robotic-journey?si=f50d9ee5871b49328f2a551332a54dcd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
                    </iframe>
                </div>
            )}
        </section>
    );
}

export default Music;