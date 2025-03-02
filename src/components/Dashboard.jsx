import React, { useState } from 'react';
import './Dashboard.css';
import Sidebar from './SidebarModel';
import MainContent from './MainContent';
import Navbar from './Navbar';
import ProfileSettings from './ProfileSettings';

function Dashboard({ userProfile, onLogout }) { // Added onLogout prop
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState('main');
  
  const handleMenuClick = (viewName) => {
    if (viewName === 'logout') {
      onLogout(); // Handle logout when logout menu item is clicked
      return;
    }
    setCurrentView(viewName);
  };

  try {
    return (
      <div className="dashboard">
        <div className="navbar">
          <Navbar userProfile={userProfile} />
        </div>
        <div className="dashboard-body">
          <Sidebar 
            isOpen={isSidebarOpen} 
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            onMenuClick={handleMenuClick}
            userProfile={userProfile}
          />
          <div className="dashboard-content">
            {currentView === 'profile' ? (
              <ProfileSettings userProfile={userProfile} />
            ) : (
              <MainContent isSidebarOpen={isSidebarOpen} />
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Dashboard rendering error:', error);
    return <div>Error loading dashboard</div>;
  }
}

export default Dashboard;
