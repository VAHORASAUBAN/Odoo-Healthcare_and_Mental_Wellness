import React from 'react';

const DoctorDashboard = () => {
  return (
    <>
      <style>
        {`
          .profile-icon {
              position: fixed;
              top: 10px;
              right: 20px;
              z-index: 100;
              cursor: pointer;
          }

          .profile-pic {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              object-fit: cover;
              border: 2px solid #65cccc;
              transition: all 0.3s ease;
          }

          .profile-pic:hover {
              opacity: 0.8;
          }

          .profile-icon .dropdown {
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

          .profile-icon:hover .dropdown {
              display: block;
          }

          .profile-icon .dropdown ul {
              padding: 0;
              margin: 0;
              list-style: none;
          }

          .profile-icon .dropdown ul li {
              padding: 10px;
              border-bottom: 1px solid #ddd;
              text-align: center;
              cursor: pointer;
              transition: background-color 0.3s;
          }

          .profile-icon .dropdown ul li:hover {
              background-color: #f0f0f0;
          }

          .rightContainer {
              padding: 20px;
              width: 84%;
              background-color: #f8f9fa;
          }

          .header h2 {
              font-size: 24px;
              margin-bottom: 20px;
              color: #333;
          }

          .dashboard-content {
              display: flex;
              gap: 20px;
          }

          .left-sections {
              flex: 1;
          }

          .calendar-notification-section {
              flex: 1;
              display: flex;
              flex-direction: column;
              gap: 20px;
          }

          .daily-overview-section {
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              margin-bottom: 20px;
          }

          .daily-overview-section h3 {
              font-size: 22px;
              margin-bottom: 15px;
              color: #333;
          }

          .overview-item {
              margin-bottom: 15px;
          }

          .overview-item ul {
              list-style-type: none;
          }

          .overview-item li {
              background-color: #e3f2fd;
              padding: 8px;
              border-radius: 5px;
              margin-bottom: 8px;
          }

          .schedule-section {
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .schedule-item {
              background-color: #e3f2fd;
              padding: 8px;
              border-radius: 5px;
              margin-bottom: 8px;
          }

          .reports-section {
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .report-item {
              background-color: #e3f2fd;
              padding: 8px;
              border-radius: 5px;
              margin-bottom: 8px;
          }

          /* Calendar Styling */
          .calendar {
              display: flex;
              justify-content: center;
              padding: 10px;
              background-color: #e3f2fd;
              border-radius: 8px;
          }

          .calendar-grid {
              display: grid;
              grid-template-columns: repeat(7, 1fr);
              gap: 5px;
              text-align: center;
          }

          .calendar-grid div {
              padding: 10px;
              border-radius: 4px;
              background-color: #ffffff;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .calendar-grid div:hover {
              background-color: #bbdefb;
              cursor: pointer;
          }

          .calendar h3 {
              text-align: center;
              margin-bottom: 10px;
          }

          /* Styling for the empty days */
          .calendar-grid .empty-day {
              background-color: transparent;
              pointer-events: none;
              cursor: default;
          }

          .notifications-section {
              background-color: #ffffff;
              padding: 15px;
              border-radius: 8px;
          }

          .notification-item {
              background-color: #f1f8e9;
              padding: 10px;
              border-radius: 4px;
              margin-bottom: 10px;
              font-size: 14px;
          }

          .notification-item:hover {
              background-color: #dcedc8;
          }
        `}
      </style>

      <div className="rightContainer">
        <div className="profile-icon">
          <i className="fas fa-user-circle profile-icon-img"></i>
          <img src="profile.jpg" alt="Profile" className="profile-pic" />
          <div className="dropdown">
            <ul>
              <li>View Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
        <div className="header">
          <h2>Dr. John Doe</h2>
        </div>

        <div className="dashboard-content">
          <div className="left-sections">
            <div className="daily-overview-section">
              <h3>Daily Overview</h3>
              <div className="overview-item">
                <strong>Today's Appointments:</strong>
                <ul>
                  <li>10:00 AM - John Smith</li>
                  <li>11:30 AM - Mary Johnson</li>
                </ul>
              </div>
              <div className="overview-item">
                <strong>Important Tasks:</strong>
                <ul>
                  <li>Check lab results for David Brown</li>
                  <li>Review prescription for Sarah Williams</li>
                </ul>
              </div>
            </div>

            <div className="schedule-section">
              <h3>My Schedule</h3>
              <div className="schedule-item">Monday: 9:00 AM - 5:00 PM</div>
              <div className="schedule-item">Tuesday: 9:00 AM - 3:00 PM</div>
              <div className="schedule-item">Wednesday: 9:00 AM - 5:00 PM</div>
            </div>

            <div className="reports-section">
              <h3>Reports</h3>
              <div className="report-item">Blood Test Results for John Smith</div>
              <div className="report-item">X-ray Report for Mary Johnson</div>
            </div>
          </div>

          <div className="calendar-notification-section">
            <div className="calendar-section">
              <h3>August</h3>
              <div className="calendar">
                <div className="calendar-grid">
                  <div>Sun</div>
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>

                  <div className="empty-day">28</div>
                  <div className="empty-day">29</div>
                  <div className="empty-day">30</div>
                  <div className="empty-day">31</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                  <div>13</div>
                  <div>14</div>
                  <div>15</div>
                  <div>16</div>
                  <div>17</div>
                  <div>18</div>
                  <div>19</div>
                  <div>20</div>
                  <div>21</div>
                  <div>22</div>
                  <div>23</div>
                  <div>24</div>
                  <div>25</div>
                  <div>26</div>
                  <div>27</div>
                  <div>28</div>
                  <div>29</div>
                  <div>30</div>
                </div>
              </div>
            </div>

            <div className="notifications-section">
              <div className="notification-item">New appointment with John Smith</div>
              <div className="notification-item">Lab results for Sarah Williams are available</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;
