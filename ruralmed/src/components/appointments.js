import React from 'react';
import accountImg from './images/account.png';
import backIcon from './images/less-than-symbol.png';
import forwardIcon from './images/greater-than-symbol.png';

const Appointments = () => {
  return (
    <div className="rightcontainer">
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
            <img src={backIcon} alt="Previous" />
          </span>
          <p>August 2023</p>
          <span className="forward">
            <img src={forwardIcon} alt="Next" />
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
        {[...Array(8)].map((_, index) => (
          <div className="row" key={index}>
            <p>1000510</p>
            <p>Ayan Husain Shaikh</p>
            <p>3/10/2024, 1:00 PM</p>
            <p>
              <i className="fa-solid fa-trash"></i>
            </p>
          </div>
        ))}
      </div>

      <style>
        {`
          .rightcontainer {
            width: 100%;
            margin: 2vh;
          }

          .profile {
            display: flex;
            width: 100%;
            justify-content: end;
            cursor: pointer;
          }

          .profile img {
            height: 6vh;
            width: auto;
          }

          .profile p {
            margin: .9vh 2vh 0 0;
            font-size: 3.5vh;
          }

          .header {
            display: flex;
            flex-direction: column;
          }

          .main-header p {
            font-size: 25px;
            font-weight: bold;
          }

          .sub-header {
            display: flex;
            flex-direction: row;
            width: 20%;
            justify-content: space-between;
            margin: 3vh 0;
          }

          .sub-header img {
            height: 3vh;
            width: auto;
            cursor: pointer;
            margin: .6vh 0;
          }

          .sub-header p {
            font-size: 18px;
            font-weight: 500;
          }

          .appointments-table {
            width: 70%;
            margin: 3vh 0 0 20vh;
          }

          .row {
            display: flex;
            flex-direction: row;
            margin: 2vh 0;
            align-items: center;
          }

          .row p {
            margin: 0;
            padding: 0 1vw;
          }

          .row i {
            color: rgb(247, 48, 48);
          }

          .row:first-child p {
            font-weight: bold;
          }

          .row p:nth-child(1) {
            flex-basis: 20%;
          }

          .row p:nth-child(2) {
            flex-basis: 30%;
          }

          .row p:nth-child(3) {
            flex-basis: 30%;
          }

          .row p:nth-child(4) {
            flex-basis: 10%;
          }
        `}
      </style>
    </div>
  );
};

export default Appointments;
