import './App.css';
import Flight from './Components/Flight';
import Sidebar from './Components/Sidebar';
import TopBar from './Components/TopBar';
import Music from './Components/Music';
import { useState } from 'react';

// App.js
function App() {
  const [activeIcon, setActiveIcon] = useState('plane');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleIconChange = (id) => {
    if (id === 'headphones' && activeIcon === 'plane') {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIcon(id);
        setIsAnimating(false);
      }, 1500); // Animation duration
    } else {
      setActiveIcon(id);
    }
  };

  const renderComponent = () => {
    switch(activeIcon) {
      case 'plane':
        return <Flight className={isAnimating ? 'animate-exit' : 'animate-enter'} />;
      case 'headphones':
        return <Music className='music' />;
      default:
        return <Flight className='animate-enter' />;
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
