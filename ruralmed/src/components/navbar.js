// NavBar.js
import React from 'react';
import './navbar.css'; 

function NavBar() {
  return (
    <div className="leftcontainer">
      <div className="navbar">
        <div className="upper">
          <div className="logo">
            <p>RURALMED</p>
          </div>
          <div className="menus">
            <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/appointments">Appointments</Link></li>
              <li>Patients</li>
            </ul>
          </div>
        </div>
        <div className="lower">
          <ul>
            <li className="settings-menu">
              Settings
              <ul className="settings-dropdown">
                <li>Manage Profile</li>
                <li>Reset Password</li>
                <li>Notifications Settings</li>
              </ul>
            </li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
