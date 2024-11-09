import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import NavBar from '../components/navbar'  // Importing icons

const DoctorDashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const changeMonth = (increment) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1);
    setCurrentDate(newDate);
  };

  const generateCalendarDays = () => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const today = new Date();

    const calendarDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="dashboard__empty-day"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = today.getDate() === day &&
        today.getMonth() === currentDate.getMonth() &&
        today.getFullYear() === currentDate.getFullYear();

      calendarDays.push(
        <div key={day} className={`dashboard__calendar-day ${isToday ? 'today' : ''}`}>
          {day}
        </div>
      );
    }
    return calendarDays;
  };

  return (
    <>
      <style>{`
          .dashboard__profile-icon {
              position: fixed;
              top: 10px;
              right: 20px;
              z-index: 100;
              cursor: pointer;
          }
          .dashboard__profile-pic {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              object-fit: cover;
              border: 2px solid #65cccc;
              transition: all 0.dashboard__3s ease;
          }
          .dashboard__profile-pic:hover {
              opacity: 0.dashboard__8;
          }
          .dashboard__profile-icon .dashboard__dropdown {
              display: none;
              position: absolute;
              top: 20px;
              right: 0;
              background-color: #fff;
              border-radius: 8px;
              box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
              width: 180px;
              z-index: 100;
          }
          .dashboard__profile-icon:hover .dashboard__dropdown {
              display: block;
          }
          .dashboard__profile-icon .dashboard__dropdown ul {
              padding: 0;
              margin: 0;
              list-style: none;
          }
          .dashboard__profile-icon .dashboard__dropdown ul li {
              padding: 10px;
              border-bottom: 1px solid #ddd;
              text-align: center;
              cursor: pointer;
              transition: background-color 0.3s;
          }
          .dashboard__profile-icon .dashboard__dropdown ul li:hover {
              background-color: #f0f0f0;
          }
          .dashboard__rightContainer {
              padding: 20px;
              width: 84%;
              background-color: #f8f9fa;
          }
          .dashboard__header h2 {
              font-size: 24px;
              margin-bottom: 20px;
              color: #333;
          }
          .dashboard__dashboard-content {
              display: flex;
              gap: 20px;
          }
          .dashboard__left-sections {
              flex: 1;
          }
          .dashboard__calendar-notification-section {
              flex: 1;
              display: flex;
              flex-direction: column;
              gap: 20px;
          }
          .dashboard__daily-overview-section {
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              margin-bottom: 20px;
          }
          .dashboard__daily-overview-section h3 {
              font-size: 22px;
              margin-bottom: 15px;
              color: #333;
          }
          .dashboard__overview-item {
              margin-bottom: 15px;
          }
          .dashboard__overview-item ul {
              list-style-type: none;
          }
          .dashboard__overview-item li {
              background-color: #e3f2fd;
              padding: 8px;
              border-radius: 5px;
              margin-bottom: 8px;
          }
          .dashboard__schedule-section {
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .dashboard__schedule-item {
              background-color: #e3f2fd;
              padding: 8px;
              border-radius: 5px;
              margin-bottom: 8px;
          }
          .dashboard__reports-section {
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .dashboard__report-item {
              background-color: #e3f2fd;
              padding: 8px;
              border-radius: 5px;
              margin-bottom: 8px;
          }
          .dashboard__calendar {
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 10px;
              background-color: #e3f2fd;
              border-radius: 8px;
          }
          .dashboard__calendar-grid {
              display: grid;
              grid-template-columns: repeat(7, 1fr);
              gap: 5px;
              text-align: center;
          }
          .dashboard__calendar-grid div {
              padding: 10px;
              border-radius: 4px;
              background-color: #ffffff;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .dashboard__calendar-grid div:hover {
              background-color: #bbdefb;
              cursor: pointer;
          }
          .dashboard__calendar h3 {
              text-align: center;
              margin-bottom: 10px;
          }
          .dashboard__calendar-grid .dashboard__empty-day {
              background-color: transparent;
              pointer-events: none;
              cursor: default;
          }
          .dashboard__calendar-navigation {
              display: flex;
              justify-content: space-between;
              width: 100%;
              padding: 10px;
              position: sticky;
              top: 10px;
              z-index: 10; 
          }
          .dashboard__notifications-section {
              background-color: #ffffff;
              padding: 15px;
              border-radius: 8px;
          }
          .dashboard__notification-item {
              background-color: #f1f8e9;
              padding: 10px;
              border-radius: 4px;
              margin-bottom: 10px;
              font-size: 14px;
          }
          .dashboard__notification-item:hover {
              background-color: #dcedc8;
          }
          .dashboard__today {
              background: #bbdefb !important;
              font-weight: bold;
              border-radius: 50%;
          }
      `}</style>
      <NavBar />
      <div className="dashboard__rightContainer">
        <div className="dashboard__profile-icon">
          <img src="profile.jpg" alt="Profile" className="dashboard__profile-pic" />
          <div className="dashboard__dropdown">
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>

        <div className="dashboard__header">
          <h2>Doctor Dashboard</h2>
        </div>

        <div className="dashboard__dashboard-content">
          <div className="dashboard__left-sections">
            <div className="dashboard__daily-overview-section">
              <h3>Daily Overview</h3>
              <div className="dashboard__overview-item">
                <ul>
                  <li>Patient Checkup at 10 AM</li>
                  <li>Follow-up Call at 2 PM</li>
                </ul>
              </div>
            </div>

            <div className="dashboard__schedule-section">
              <h3>Schedule</h3>
              <div className="dashboard__schedule-item">Consultation with John Doe at 11 AM</div>
              <div className="dashboard__schedule-item">Review Reports at 3 PM</div>
            </div>

            <div className="dashboard__reports-section">
              <h3>Reports</h3>
              <div className="dashboard__report-item">Blood Test Analysis</div>
              <div className="dashboard__report-item">X-Ray Review</div>
            </div>
          </div>

          <div className="dashboard__calendar-notification-section">
            <div className="dashboard__calendar">
              <h3>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
              <div className="dashboard__calendar-navigation">
                <FaArrowLeft size={20} onClick={() => changeMonth(-1)} />
                <FaArrowRight size={20} onClick={() => changeMonth(1)} />
              </div>
              <div className="dashboard__calendar-grid">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
                {generateCalendarDays()}
              </div>
            </div>

            <div className="dashboard__notifications-section">
              <h3>Notifications</h3>
              <div className="dashboard__notification-item">New Appointment Scheduled</div>
              <div className="dashboard__notification-item">Patient Update Received</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;
