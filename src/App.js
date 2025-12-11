import React, { useState, useEffect } from 'react';
import './App.css';
import memories from './memories';
import LandingPage from './LandingPage'; // Import the new component

function App() {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [showWebsite, setShowWebsite] = useState(false);

  // LOGIC: Check if today is past 14 DEC
  useEffect(() => {
    const checkDate = () => {
      const targetDate = new Date('2025-12-14T00:00:00'); // Adjust year if needed!
      const now = new Date();
      
      // If current date is greater than or equal to target, show the site
      if (now >= targetDate) {
        setShowWebsite(true);
      }
    };
    checkDate();
  }, []);

  // 1. If it's NOT time yet, show the Landing Page (Wait Screen)
  if (!showWebsite) {
    return <LandingPage />;
  }

  // 2. If it IS time (or you change the date logic above), show the LoveFlix App
  const categories = [...new Set(memories.map(m => m.category))];

  return (
    <div className="app">
      {/* 1. Header / Hero */}
      <header className="hero">
        <h1>LoveFlix</h1>
      </header>

      {/* 2. Loop through categories to create rows */}
      {categories.map((category) => (
        <div key={category} className="row">
          <h2>{category}</h2>
          <div className="row__posters">
            {memories
              .filter((m) => m.category === category)
              .map((memory) => (
                <img
                  key={memory.id}
                  className="row__poster"
                  src={memory.image}
                  alt={memory.title}
                  onClick={() => setSelectedMemory(memory)}
                />
              ))}
          </div>
        </div>
      ))}

      {/* 3. The Popup Modal */}
      {selectedMemory && (
        <div className="modal-overlay" onClick={() => setSelectedMemory(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedMemory(null)}>
              &times;
            </button>
            
            <img src={selectedMemory.image} alt={selectedMemory.title} />
            
            <div className="modal-text">
              <h3>{selectedMemory.title}</h3>
              <p><strong>Match:</strong> 98% Match</p>
              <p>{selectedMemory.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;