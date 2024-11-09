import React from 'react';
import './Appointments.css';
import accountImg from './images/account.png';
import backIcon from './images/less-than-symbol.png';
import forwardIcon from './images/greater-than-symbol.png';

function Appointments() {
  return (
    <div className="appointments-container">
      <div className="profile">
        <p>John Doe</p>
        <img src={accountImg} alt="Profile" />
      </div>
      <div className="header">
        <div className="main-header">
          <p>Appointments</p>
        </div>
        <div className="sub-header">
          <span className="backword">
            <img src={backIcon} alt="Back" />
          </span>
          <p>August 2023</p>
          <span className="forward">
            <img src={forwardIcon} alt="Forward" />
          </span>
        </div>
      </div>
      <div className="appointments-table">
        <div className="row header-row">
          <p>ID Code</p>
          <p>Name</p>
          <p>Date/Time</p>
          <p>Action</p>
        </div>
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="row data-row" key={index}>
            <p>1000510</p>
            <p>Ayan Husain Shaikh</p>
            <p>3/10/2024, 1:00 PM</p>
            <p className="delete-icon"><i className="fa-solid fa-trash"></i></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointments;
