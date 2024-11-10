import React from 'react';
import './PatientDashboard.css';
import ProfileImg from '../components/images/account.png'
import PatientNavBar from '../components/PatientNavBar'  // Import the corresponding CSS file

const PatientDashboard = () => {
  return (
    <>
    <PatientNavBar></PatientNavBar>
    <div className="rightContainer">
      {/* Profile Section */}
      <div className="profile-icon">
        <img src={ProfileImg} alt="Profile" className="profile-pic" />

      </div>

      {/* Header */}
      <div className="header">
        <h2>Patient Name</h2>
      </div>

      {/* Patient Details */}
      <div className="patient-details">
        <div className="detail-item">
          <strong>Patient ID:</strong> 12345
        </div>
        <div className="detail-item">
          <strong>Age:</strong> 45
        </div>
        <div className="detail-item">
          <strong>Gender:</strong> Male
        </div>
        <div className="detail-item">
          <strong>Contact:</strong> +123 456 7890
        </div>
        <div className="detail-item">
          <strong>Email:</strong> patient@example.com
        </div>
        <div className="detail-item">
          <strong>Address:</strong> 123 Street Name, City, Country
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <div className="info-section">
          {/* Upcoming Appointments */}
          <div className="upcoming-appointments">
            <h3>Upcoming Appointments</h3>
            <div className="appointment-item">Appointment 1</div>
            <div className="appointment-item">Appointment 2</div>
          </div>

          {/* Recent Appointments */}
          <div className="recent-appointments">
            <h3>Recent Appointments</h3>
            <div className="appointment-item">Recent Appointment 1</div>
            <div className="appointment-item">Recent Appointment 2</div>
          </div>

          {/* Diagnosis Section */}
          <div className="diagnosis">
            <h3>Diagnosis</h3>
            <div className="diagnosis-item">
              <i className="fas fa-prescription-bottle-alt"></i> Diagnosis 1
            </div>
            <div className="diagnosis-item">
              <i className="fas fa-prescription-bottle-alt"></i> Diagnosis 2
            </div>
          </div>

          {/* Medication Section */}
          <div className="medication">
            <h3>Medication</h3>
            <div className="medication-item">
              <i className="fas fa-pills"></i> Medication 1
            </div>
            <div className="medication-item">
              <i className="fas fa-pills"></i> Medication 2
            </div>
          </div>
        </div>

        {/* Calendar and Notifications Section */}
        <div className="calendar-notification-section">
          {/* Calendar */}
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

                {/* Calendar Days */}
                <div className="empty-day">28</div>
                <div className="empty-day">29</div>
                <div className="empty-day">30</div>
                <div className="empty-day">31</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                {/* Add the remaining days */}
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="notifications-section">
            <h3>Notifications</h3>
            <div className="notification-item">New appointment scheduled for tomorrow.</div>
            <div className="notification-item">Medication reminder: Take your medicine at 8:00 AM.</div>
            <div className="notification-item">You have a new message from your doctor.</div>
          </div>
        </div>

        {/* Your Doctors Section */}
        <div className="doctors-section">
          <h3>Your Doctors</h3>
          <div className="doctor-item">Dr. XYZ</div>
          <div className="doctor-item">Dr. ABC</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default PatientDashboard;
