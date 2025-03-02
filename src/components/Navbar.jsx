import React from 'react';
import { IoNotifications, IoSearchOutline } from 'react-icons/io5';
import './Navbar.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/LOGO-removebg-preview.png" alt="Logo" className="logo-image" />
      </div>
      <div className="search-bar">
        <IoSearchOutline className="search-icon" />
        <input 
          type="text" 
          placeholder="Search for Subject..." 
          aria-label="Search"
        />
      </div>
      <div className="nav-icons">
        <div className="notification-icon">
          <IoNotifications />
        </div>
        <span className="profile-text">Guest user</span>
        <img 
          src="https://via.placeholder.com/150" 
          alt="Profile" 
          className="profile-image" 
        />
      </div>
    </nav>
  );
};

export default Navbar;
