import React from 'react';
import './PatientDetails.css'
import NavBar from '../components/navbar'

const PatientDetails = () => {
  return (
    <>
    <NavBar />
    <div className="rightContainer">
      <div className="header">
        <h2>Patient Details - John Smith</h2>
      </div>

      <div className="patient-details-content">
        {/* Patient Details Section */}
        <div className="patient-details-section">
          <h3>Patient Details</h3>
          <div className="details-item">
            <strong>Name:</strong> John Smith
          </div>
          <div className="details-item">
            <strong>Age:</strong> 45
          </div>
          <div className="details-item">
            <strong>Gender:</strong> Male
          </div>
          <div className="details-item">
            <strong>Phone:</strong> +123 456 7890
          </div>
        </div>

        {/* Compact Section with Appointment & Prescription History */}
        <div className="compact-section">
          <div className="appointment-history-section">
            <h3>Previous Appointments</h3>
            <div className="appointment-item">
              <strong>Date:</strong> 12th March 2024 - 10:00 AM<br />
              <strong>Diagnosis:</strong> Flu
            </div>
            <div className="appointment-item">
              <strong>Date:</strong> 5th December 2023 - 11:30 AM<br />
              <strong>Diagnosis:</strong> High Blood Pressure
            </div>
          </div>

          <div className="prescription-history-section">
            <h3>Prescription History</h3>
            <div className="prescription-item">
              <strong>Medication:</strong> Paracetamol<br />
              <strong>Dosage:</strong> 500mg twice a day
            </div>
            <div className="prescription-item">
              <strong>Medication:</strong> Lisinopril<br />
              <strong>Dosage:</strong> 10mg once a day
            </div>
          </div>
        </div>

        {/* Compact Section with Messages/Notes and Upcoming Appointments */}
        <div className="compact-section">
          <div className="messages-notes-section">
            <h3>Messages/Notes</h3>
            <div className="message-item">
              <strong>Note:</strong> Patient has a family history of heart disease.
            </div>
          </div>

          <div className="upcoming-appointments-section">
            <h3>Upcoming Appointments</h3>
            <div className="appointment-item">
              <strong>Date:</strong> 20th April 2024 - 9:00 AM
            </div>
          </div>
        </div>

        {/* Doctor's Actions/Notes Section */}
        <div className="doctor-actions-section">
          <h3>Doctor's Actions/Notes</h3>
          <textarea placeholder="Add notes or actions for this patient..."></textarea>
        </div>
      </div>
    </div>
    </>
  );
};

export default PatientDetails;
