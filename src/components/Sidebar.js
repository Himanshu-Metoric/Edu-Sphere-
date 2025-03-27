import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/faculty', label: 'Faculty', icon: '👨‍🏫' },
    { path: '/doubts', label: 'Doubts', icon: '❓' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-[200px] bg-[#333232] flex flex-col items-start py-8 z-50">
      <div className="flex items-center justify-between w-full px-4 mb-8">
        <div className="text-2xl font-bold text-[#6dc9d0]">
          Education
        </div>
      </div>
      
      <nav className="flex-1 w-full">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center h-12 px-4 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-[#6dc9d0] text-white'
                    : 'text-gray-400 hover:bg-[#2a2a2a] hover:text-white'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="ml-4 text-white">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;