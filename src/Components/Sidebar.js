
import React from 'react';
import './Sidebar.css';
import { Plane, Headphones, MonitorPlay, Calendar, Settings, User } from 'lucide-react';

const Sidebar = ({ activeIcon, setActiveIcon }) => {
  const icons = [
    { icon: Plane, id: 'plane' },
    { icon: Headphones, id: 'headphones' },
    { icon: MonitorPlay, id: 'monitorPlay' },
    { icon: Calendar, id: 'calendar' },
    { icon: Settings, id: 'settings' },
    { icon: User, id: 'user' },
  ];

  return (
    <div className="sidebar-container">
      {icons.map(({ icon: Icon, id }) => (
        <button
          key={id}
          onClick={() => setActiveIcon(id)}
          className={`sidebar-button ${activeIcon === id ? 'active' : ''}`}
        >
          <Icon size={24} />
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
