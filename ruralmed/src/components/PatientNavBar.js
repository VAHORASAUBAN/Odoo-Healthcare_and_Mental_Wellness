import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PatientNavBar.css';

function PatientNavBar() {
  // Initialize state with values from localStorage or default values
  const [selectedUpper, setSelectedUpper] = useState(localStorage.getItem('selectedUpper') || 'dashboard');
  const [selectedLower, setSelectedLower] = useState(localStorage.getItem('selectedLower') || '');

  useEffect(() => {
    // Store selected menus in localStorage whenever they change
    localStorage.setItem('selectedUpper', selectedUpper);
    localStorage.setItem('selectedLower', selectedLower);
  }, [selectedUpper, selectedLower]);

  const handleSelectUpper = (menu) => {
    setSelectedUpper(menu);
    setSelectedLower(''); // Reset lower selection on upper selection
  };

  const handleSelectLower = (menu) => {
    setSelectedLower(menu);
    setSelectedUpper(''); // Reset upper selection on lower selection
  };

  return (
    <div className="leftcontainer">
      <div className="navbar">
        <div className="upper">
          <div className="logo">
            <p>RURALMED</p>
          </div>
          <div className="menus">
            <ul>
              <li
                className={selectedUpper === 'dashboard' ? 'selected' : ''}
                onClick={() => handleSelectUpper('dashboard')}
              >
                <Link to="/PatientDashboard">Dashboard</Link>
              </li>
              <li
                className={selectedUpper === 'appointments' ? 'selected' : ''}
                onClick={() => handleSelectUpper('appointments')}
              >
                <Link to="/finddoctor">Find Doctor</Link>
              </li>
              {/* <li
                className={selectedUpper === 'patients' ? 'selected' : ''}
                onClick={() => handleSelectUpper('patients')}
              >
                <Link to="/patients">Patients</Link>
              </li><li
                className={selectedUpper === 'patients' ? 'selected' : ''}
                onClick={() => handleSelectUpper('patients')}
              >
                <Link to="/patients">Patients</Link>
              </li> */}
              {/* <li
                className={selectedUpper === 'patients' ? 'selected' : ''}
                onClick={() => handleSelectUpper('patients')}
              >
                <Link to="/patients">Patients</Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="lower">
          <ul>
            <li
              className={`settings-menu ${selectedLower === 'settings' ? 'selected' : ''}`}
              onClick={() => handleSelectLower('settings')}
            >
              Settings
              <ul className="settings-dropdown">
                <li><Link to="/profile">Manage Profile</Link></li>
                <li><Link to="/resetpassword">Reset Password</Link></li>
              </ul>
            </li>
            <li
              className={selectedLower === 'logout' ? 'selected' : ''}
              onClick={() => handleSelectLower('logout')}
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PatientNavBar;
