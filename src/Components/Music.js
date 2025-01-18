// Music.js
import React from 'react';
import './Music.css';
import backgroundImage from '../Media/mscbackground.png'; // 

function Music({ className }) {
  return (
    <div className={className}>
      <div 
        className="music-background" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
      <div className="music-background">
        <div className="music-container">
          {/* Left Side - Player */}
          <div className="player-section">
            <button className="back-button">⟨</button>
            
            <div className="disc-player">
              <div className="disc">
                <button className="play-pause">II</button>
              </div>
            </div>
            
            <div className="player-controls">
              <button className="skip-btn">⟨⟨</button>
              <div className="progress-bar">
                <div className="progress"></div>
              </div>
              <button className="skip-btn">⟩⟩</button>
            </div>
            
            <div className="shuffle-repeat">
              <button className="shuffle">⤨</button>
              <button className="repeat">⟳</button>
            </div>
          </div>

          {/* Right Side - Playlist */}
          <div className="playlist-section">
            <div className="playlist-header">
              <h1>Good Vibe</h1>
              <p>Multiple Artists • 26 songs</p>
              <button className="menu-btn">⋮</button>
            </div>
            
            <div className="song-list">
              <div className="song-item active">
                <span className="number">1</span>
                <div className="song-info">
                  <span className="title">Fourty six and 2</span>
                </div>
                <button className="play">▶</button>
              </div>
              <div className="song-item">
                <span className="number">2</span>
                <div className="song-info">
                  <span className="title">Change</span>
                  <span className="artist">Deftones</span>
                </div>
                <button className="play">▶</button>
              </div>
              <div className="song-item">
                <span className="number">3</span>
                <div className="song-info">
                  <span className="title">Invincible</span>
                </div>
                <button className="play">▶</button>
              </div>
              <div className="song-item">
                <span className="number">4</span>
                <div className="song-info">
                  <span className="title">Faded Lines</span>
                </div>
                <button className="play">▶</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}


export default Music;
