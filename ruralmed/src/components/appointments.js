// Appointments.js
import React from 'react';
import './appointments.css'; // Ensure you have the appropriate styles for this component

function Appointments() {
  return (
    <div className="rightContainer">
      <div className="profile">
        <p>John Doe</p>
        <img src="/images/account.png" alt="Profile" />
      </div>
      <div className="header">
        <div className="main-header">
          <p>Appointments</p>
        </div>
        <div className="sub-header">
          <span className="backword">
            <img src="/images/less-than-symbol.png" alt="Back" />
          </span>
          <p>August 2023</p>
          <span className="forward">
            <img src="/images/greater-than-symbol.png" alt="Forward" />
          </span>
        </div>
      </div>
      <div className="appointments-table">
        <div className="row">
          <p>ID Code</p>
          <p>Name</p>
          <p>Date/Time</p>
          <p>Action</p>
        </div>
        {/* Repeat appointment rows */}
        <div className="row">
          <p>1000510</p>
          <p>John Doe</p>
          <p>3/10/2024, 11:00 AM</p>
          <p><i className="fa-solid fa-trash"></i></p>
        </div>
        <div className="row">
          <p>1000510</p>
          <p>Ayan Husain Shaikh</p>
          <p>3/10/2024, 1:00 PM</p>
          <p><i className="fa-solid fa-trash"></i></p>
        </div>
        {/* More rows can be added similarly */}
      </div>
    </div>
  );
}

export default Appointments;
