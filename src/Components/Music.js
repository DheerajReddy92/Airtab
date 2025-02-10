// Music.js
import React from 'react';
// import './Music.css';
import '../App.css'
import { Music2 } from 'lucide-react';
import backgroundImage from '../Media/mscbackground.png';
import discBackground from '../Media/deskimg.jpg';




function Music({ className }) {
  return (
    <div className={className}>
      <div 
        className="music-background" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="notes-container">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="music-note"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `-50px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
                opacity: 0
              }}
            >
              <Music2 className="note-icon" />
            </div>
          ))}
        </div>

        <div className="music-container">
          {/* Left Side - Player */}
          <div className="player-section">
            <button className="back-button animate-fade">⟨</button>
            
            <div className="disc-player animate-zoom">
              <div 
                className="disc"
                style={{ 
                  backgroundImage: `url(${discBackground})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <button className="play-pause animate-expand">II</button>
              </div>
            </div>

            
            <div className="player-controls animate-slide-up">
              <button className="skip-btn">⟨⟨</button>
              <div className="progress-bar">
                <div className="progress"></div>
              </div>
              <button className="skip-btn">⟩⟩</button>
            </div>
            
            <div className="shuffle-repeat animate-slide-up">
              <button className="shuffle">⤨</button>
              <button className="repeat">⟳</button>
            </div>
          </div>

          {/* Right Side - Playlist */}
          <div className="playlist-section">
            <div className="playlist-header animate-fade-in">
              <h1>Good Vibe</h1>
              <p>Multiple Artists • 26 songs</p>
              <button className="menu-btn">⋮</button>
            </div>
            
                      
          <div className="song-list">
            {[
              { number: "1", title: "Fourty six and 2", active: true },
              { number: "2", title: "Change", artist: "Deftones" },
              { number: "3", title: "Invincible" },
              { number: "4", title: "Faded Lines" }
            ].map((song, index) => (
              <div 
                key={index}
                className={`song-item ${song.active ? 'active' : ''} ${className.includes('animate-exit') ? '' : 'animate-slide-up'}`}
                style={className.includes('animate-exit') ? {} : { animationDelay: `${1.2 + (index * 0.1)}s` }}
              >
                <span className="number">{song.number}</span>
                <div className="song-info">
                  <span className="title">{song.title}</span>
                  {song.artist && <span className="artist">{song.artist}</span>}
                </div>
                <button className="play">▶</button>
              </div>
            ))}
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}




export default Music;
