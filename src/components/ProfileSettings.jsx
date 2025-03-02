import React, { useState } from 'react';
import './ProfileSettings.css';

function ProfileSettings({ userProfile = { 
  name: 'Student Name', 
  image: '👤',
  email: 'student@example.com',
  studentId: '2023001',
  major: 'Computer Science',
  year: '3rd Year',
  semester: '2nd Semester',
  gpa: '3.75',
  phone: '+1 234 567 8900',
  dob: '1995-01-01'
} }) {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="profile-settings">
      <div className="profile-header">
        <div className="profile-banner">
          <div className="profile-pic-large">{userProfile.image}</div>
          <div className="profile-basic-info">
            <h1>{userProfile.name}</h1>
            <span className="student-id">Student ID: {userProfile.studentId}</span>
          </div>
        </div>
        <div className="profile-tabs">
          <button 
            className={`tab ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Info
          </button>
          <button 
            className={`tab ${activeTab === 'academic' ? 'active' : ''}`}
            onClick={() => setActiveTab('academic')}
          >
            Academic Details
          </button>
          <button 
            className={`tab ${activeTab === 'preferences' ? 'active' : ''}`}
            onClick={() => setActiveTab('preferences')}
          >
            Preferences
          </button>
        </div>
      </div>

      <div className="settings-content">
        {activeTab === 'personal' && (
          <div className="tab-content personal-info">
            <h2>Personal Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <div className="info-value">{userProfile.name}</div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <div className="info-value">{userProfile.email}</div>
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <div className="info-value">{userProfile.phone}</div>
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <div className="info-value">{userProfile.dob}</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'academic' && (
          <div className="tab-content academic-info">
            <h2>Academic Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Major</label>
                <div className="info-value">{userProfile.major}</div>
              </div>
              <div className="form-group">
                <label>Current Year</label>
                <div className="info-value">{userProfile.year}</div>
              </div>
              <div className="form-group">
                <label>Semester</label>
                <div className="info-value">{userProfile.semester}</div>
              </div>
              <div className="form-group">
                <label>GPA</label>
                <div className="info-value">{userProfile.gpa}</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'preferences' && (
          <div className="tab-content preferences">
            <h2>Study Preferences</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Preferred Study Time</label>
                <select defaultValue="morning">
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>
              <div className="form-group">
                <label>Notification Settings</label>
                <div className="checkbox-group">
                  <label>
                    <input type="checkbox" defaultChecked /> Email Notifications
                  </label>
                  <label>
                    <input type="checkbox" defaultChecked /> Quiz Reminders
                  </label>
                  <label>
                    <input type="checkbox" defaultChecked /> Assignment Deadlines
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileSettings;
