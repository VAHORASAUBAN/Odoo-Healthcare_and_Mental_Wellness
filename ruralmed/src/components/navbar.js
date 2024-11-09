import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './navbar.css';

function NavBar() {
  // State to track the selected upper menu item
  const [selectedUpper, setSelectedUpper] = useState('dashboard');
  // State to track the selected lower menu item
  const [selectedLower, setSelectedLower] = useState('');

  // Function to handle selection in the upper menu
  const handleSelectUpper = (menu) => {
    setSelectedUpper(menu);
    setSelectedLower(''); // Reset lower selection on upper selection
  };

  // Function to handle selection in the lower menu
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
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li
                className={selectedUpper === 'appointments' ? 'selected' : ''}
                onClick={() => handleSelectUpper('appointments')}
              >
                <Link to="/appointments">Appointments</Link>
              </li>
              <li
                className={selectedUpper === 'patients' ? 'selected' : ''}
                onClick={() => handleSelectUpper('patients')}
              >
                <Link to="/patients">Patients</Link>
              </li>
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
                <li>Manage Profile</li>
                <li>Reset Password</li>
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

export default NavBar;
