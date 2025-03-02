import React from 'react';
import { menuItems } from '../config/menuItems';
import { Icons } from '../utils/icons';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar, onMenuClick, userProfile = { name: 'Student Name', image: '👤' } }) {
  
  const bottomMenuItems = [
    { id: 'help', icon: Icons.help, text: 'Help', path: '/help', className: 'sidebar-help-button' },
    { id: 'logout', icon: Icons.logout, text: 'Logout', path: '/logout', className: 'sidebar-logout-button' },
  ];

  const handleMouseEnter = (event) => {
    const icon = event.currentTarget;
    const tooltip = icon.querySelector('.tooltip');
    if (tooltip) {
      const rect = icon.getBoundingClientRect();
      requestAnimationFrame(() => {
        tooltip.style.top = `${rect.top}px`;
        tooltip.style.left = `${rect.right + 10}px`; // Position 10px to the right of the icon
        tooltip.style.transform = 'translateY(-50%)'; // Only center vertically
      });
    }
  };

  const handleItemClick = (itemId) => {
    onMenuClick(itemId);
  };

  const handleToggle = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    if (typeof toggleSidebar === 'function') {
      toggleSidebar();
    }
  };

  return (
    <div className={`sidebar ${!isOpen ? 'collapsed' : ''}`}>
      <button 
        className="toggle-btn" 
        onClick={handleToggle}
        type="button"
      >
        {isOpen ? '◀' : '▶'}
      </button>
      <div className="sidebar-content">
        <div className="main-content">
          <div className="profile-section">
            <div className="profile-pic">{userProfile.image}</div>
            <div className="profile-info">
              <span className="profile-name">{userProfile.name}</span>
              <span className="profile-type">Guest User</span>
            </div>
          </div>
          
          <div className="separator" />

          <div className="menu-section">
            {menuItems.mainMenu.map(item => (
              <div 
                key={item.id} 
                className="menu-item"
                onClick={() => handleItemClick(item.id)}
                style={{ cursor: 'pointer' }}
              >
                <div 
                  className="icon-wrapper"
                  onMouseEnter={handleMouseEnter}
                >
                  <span className="icon">{item.icon}</span>
                  <div className="tooltip">{item.text}</div>
                </div>
                <span className="menu-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bottom-wrapper">
          <div className="separator" />
          <div className="menu-section bottom">
            {bottomMenuItems.map(item => (
              <div 
                key={item.id} 
                className={`menu-item ${item.className}`}
              >
                <div 
                  className="icon-wrapper"
                  onMouseEnter={handleMouseEnter}
                >
                  <span className="icon">{item.icon}</span>
                  <div className="tooltip">{item.text}</div>
                </div>
                <span className="menu-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;