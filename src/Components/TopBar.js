// Navbar.js
import React, { useState } from 'react';
// import './TopBar.css'
import '../App.css'
import { Sun, SunDim, Volume1, Volume2, HelpCircle } from 'lucide-react';

const topicon = `${import.meta.env.BASE_URL}media/topicon.png`;

const Navbar = () => {


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="topbar-icon">
            <img src={topicon} alt="Logo" />
          </div>
          
          <button
   
            className="control-button"
            aria-label="decrease brightness"
          >
            <SunDim className="icon" />
        
          </button>
          <button
   
            className="control-button"
            aria-label="increase brightness"
          >
            <Sun className="icon" />
        
          </button>

          <button
   
            className="control-button"
            aria-label="Toggle dark mode"
          >
            <Volume1 className="icon" />
        
          </button>

          <button
   
            className="control-button"
            aria-label="Toggle dark mode"
          >
            <Volume2 className="icon" />
        
          </button>

      
        </div>

        <button 
          className="help-button"
          aria-label="Help"
        >
          <HelpCircle className="icon" />
          <span className="help-text">Help</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
