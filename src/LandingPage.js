// src/LandingPage.js
import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [enterSite, setEnterSite] = useState(false);

  const handleEnter = () => {
    setEnterSite(true);
  };

  return (
    <div className="landing-wrapper">
      {!enterSite ? (
        <div className="intro-screen">
          <h1 className="logo-fade">BUBU's Gift</h1>
          <button className="netflix-btn" onClick={handleEnter}>
            Who's Watching?
          </button>
        </div>
      ) : (
        <div className="main-message-screen fade-in">
          <div className="content-center">
            <h1 className="big-logo">BUBU's Gift</h1>
            <h2 className="filmy-text">Wait for</h2>
            <div className="date-reveal">
              <span>14 DEC</span>
              <span className="time">00:00 AM</span>
            </div>
            <h2 className="filmy-text">to see this website</h2>
          </div>
          
          {/* Hidden Music Player */}
          <iframe
            width="0"
            height="0"
            src="https://www.youtube.com/embed/ifW5jjL0IL4?autoplay=1&loop=1&playlist=ifW5jjL0IL4&controls=0&showinfo=0&autohide=1&modestbranding=1"
            title="Loveflix Theme"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default LandingPage;