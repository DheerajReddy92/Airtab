import './App.css';
import Flight from './Components/Flight';
import Sidebar from './Components/Sidebar';
import TopBar from './Components/TopBar';
import Music from './Components/Music';
import Movie from './Components/Movie';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [activeIcon, setActiveIcon] = useState('plane');
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevIcon, setPrevIcon] = useState(null);

  const handleIconChange = (id) => {
    setPrevIcon(activeIcon);
    if (id === 'headphones' && activeIcon === 'plane') {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIcon(id);
        setIsAnimating(false);
      }, 800);
    } else if (activeIcon === 'headphones' && id === 'plane') {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIcon(id);
        setIsAnimating(false);
      }, 800);
    } else if (activeIcon === 'monitorPlay') {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIcon(id);
        setIsAnimating(false);
      }, 400);
    } else if (id === 'monitorPlay') {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIcon(id);
        setIsAnimating(false);
      }, 600);
    } else {
      setActiveIcon(id);
    }
  };

  const renderComponent = () => {
    if (activeIcon === 'plane' || (isAnimating && prevIcon === 'plane')) {
      return <Flight className={isAnimating && prevIcon === 'plane' ? 'animate-exit' : ''} />;
    }
    if (activeIcon === 'headphones' || (isAnimating && prevIcon === 'headphones')) {
      return <Music className={`music ${isAnimating && prevIcon === 'headphones' ? 'animate-exit' : ''}`} />;
    }
    if (activeIcon === 'monitorPlay' || (isAnimating && prevIcon === 'monitorPlay')) {
      return (
        <Movie 
          className={`movie ${isAnimating && prevIcon === 'monitorPlay' ? 'animate-exit' : ''}`} 
        />
      );
    }
    return null;
  };

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>

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
    </BrowserRouter>
  );
}

export default App;
