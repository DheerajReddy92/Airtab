import './App.css';
import Flight from './Components/Flight';
import Sidebar from './Components/Sidebar';
import TopBar from './Components/TopBar';
import Music from './Components/Music';
import Movie from './Components/Movie';

import { useState } from 'react';

function App() {
  const [activeIcon, setActiveIcon] = useState('plane');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleIconChange = (id) => {
    if (id === 'headphones' && activeIcon === 'plane') {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIcon(id);
        setIsAnimating(false);
      }, 1500);
    } else if (activeIcon === 'headphones' && id === 'plane') {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIcon(id);
        setIsAnimating(false);
      }, 1500);
    } else if (id === 'monitorPlay' && (activeIcon === 'plane' || activeIcon === 'headphones')) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIcon(id);
        setIsAnimating(false);
      }, 1500);
    } else {
      setActiveIcon(id);
    }
  };

  const renderComponent = () => {
    switch(activeIcon) {
      case 'plane':
        return <Flight className={isAnimating ? 'animate-exit' : ''} />;
      case 'headphones':
        return (
          <Music 
            className={`music ${isAnimating ? 'animate-exit' : ''}`} 
          />
        );
      case 'monitorPlay':
        return (
          <Movie 
            className={`movie ${isAnimating ? 'animate-exit' : ''}`} 
          />
        );
      default:
        return <Flight className='' />;
    }
  };

  return (
    <div className="App">
      <TopBar />
      <Sidebar 
        className='sidebar' 
        activeIcon={activeIcon} 
        setActiveIcon={handleIconChange} 
      />
      <div className="main-content">
        {renderComponent()}
      </div>
    </div>
  );
}



export default App;
