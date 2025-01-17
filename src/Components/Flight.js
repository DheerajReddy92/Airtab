// Flight.js
import React from 'react';
import '../App.css';
import './Flight.css';
import cloudsVideo from '../Media/clouds.mp4';
import planeImage from '../Media/Plane.png';
import { Plane as PlaneIcon } from 'lucide-react';

function Flight() {
  return (
    <div className="Plane">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={cloudsVideo} type="video/mp4" />
        </video>
      </div>
      <div className="flying-plane">
        <img src={planeImage} alt="Flying Plane" />
      </div>
      <div className="content-panel">
        <div className="panel-content">
          <h1 className="welcome-text">WELCOME<br />On Board</h1>
          <p className="service-info">...Lunch will be served in 10 minutes</p>
          
          <div className="flight-route">
            <div className="route-container">
              <div className="city-container">
                <div className="city">
                  <span className="city-name">San Francisco</span>
                  <span className="city-code">SFO</span>
                </div>
                <div className="city">
                  <span className="city-name">New York City</span>
                  <span className="city-code">NYC</span>
                </div>
              </div>   
              
              <div className="time-container">
                <div className="time-wrapper">
                  <span className="time">09:50</span>
                  <span className="period">AM</span>
                </div>
                <div className="time-wrapper">
                  <span className="time">1:30</span>
                  <span className="period">PM</span>
                </div>
              </div>
              
              <div className="flight-progress">
                <div className="progress-line">
                  <PlaneIcon className="plane-icon" size={36} fill="#ff5a5f" />
                </div>
                <div className="duration-text">
                  <span className="duration">5 hours</span>
                  <span className="remaining">remaining</span>
                </div>
              </div>
            </div>
          </div>

          <div className="weather-card">
            <div className="weather-info">
              <span className="temperature">62°</span>
              <span className="weather-desc">Cloudy</span>
            </div>
            <div className="weather-icon">☀️</div>
          </div>

          <div className="music-section">
            <div className="music-header">
              <span className="music-title">Good Vibe</span>
              <span className="music-subtitle">Multiple Artists</span>
            </div>
            <div className="music-player">
              <div className="song-info">
                <span className="song-name">Spiderman...</span>
                <button className="play-button">▶</button>
              </div>
              <div className="album-art">
                <img src="spiderman-cover.jpg" alt="Album Cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flight;
