import './App.css';
import Flight from './Components/Flight';
import Sidebar from './Components/Sidebar';
import TopBar from './Components/TopBar';
import { useState } from 'react';

function App() {
  const [activeIcon, setActiveIcon] = useState('plane');

  return (
    <div className="App">
      <TopBar />
      <Sidebar className='sidebar' activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
      <div className="main-content">
        <Flight classNmae='Plane' />
      </div>
    </div>
  );
}

export default App;
