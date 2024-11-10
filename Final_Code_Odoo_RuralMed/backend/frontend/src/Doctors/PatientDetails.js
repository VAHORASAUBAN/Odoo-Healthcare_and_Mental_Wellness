import React from 'react';
import './PatientDetails.css'
import NavBar from '../components/navbar'

const PatientDetails = () => {
  return (
    <>
    <NavBar />
    <div className="pdetails__rightContainer">
      <div className="pdetails__header">
        <h2>Patient Details - John Smith</h2>
      </div>

      <div className="pdetails__patient-details-content">
        {/* Patient Details Section */}
        <div className="pdetails__patient-details-section">
          <h3>Patient Details</h3>
          <div className="pdetails__details-item">
            <strong>Name:</strong> John Smith
          </div>
          <div className="pdetails__details-item">
            <strong>Age:</strong> 45
          </div>
          <div className="pdetails__details-item">
            <strong>Gender:</strong> Male
          </div>
          <div className="pdetails__details-item">
            <strong>Phone:</strong> +123 456 7890
          </div>
        </div>

        {/* Compact Section with Appointment & Prescription History */}
        <div className="pdetails__compact-section">
          <div className="pdetails__appointment-history-section">
            <h3>Previous Appointments</h3>
            <div className="pdetails__appointment-item">
              <strong>Date:</strong> 12th March 2024 - 10:00 AM<br />
              <strong>Diagnosis:</strong> Flu
            </div>
            <div className="pdetails__appointment-item">
              <strong>Date:</strong> 5th December 2023 - 11:30 AM<br />
              <strong>Diagnosis:</strong> High Blood Pressure
            </div>
          </div>

          <div className="pdetails__prescription-history-section">
            <h3>Prescription History</h3>
            <div className="pdetails__prescription-item">
              <strong>Medication:</strong> Paracetamol<br />
              <strong>Dosage:</strong> 500mg twice a day
            </div>
            <div className="pdetails__prescription-item">
              <strong>Medication:</strong> Lisinopril<br />
              <strong>Dosage:</strong> 10mg once a day
            </div>
          </div>
        </div>

        {/* Compact Section with Messages/Notes and Upcoming Appointments */}
        <div className="pdetails__compact-section">
          <div className="pdetails__messages-notes-section">
            <h3>Messages/Notes</h3>
            <div className="pdetails__message-item">
              <strong>Note:</strong> Patient has a family history of heart disease.
            </div>
          </div>

          <div className="pdetails__upcoming-appointments-section">
            <h3>Upcoming Appointments</h3>
            <div className="pdetails__appointment-item">
              <strong>Date:</strong> 20th April 2024 - 9:00 AM
            </div>
          </div>
        </div>

        {/* Doctor's Actions/Notes Section */}
        <div className="pdetails__doctor-actions-section">
          <h3>Doctor's Actions/Notes</h3>
          <textarea placeholder="Add notes or actions for this patient..."></textarea>
        </div>
      </div>
    </div>
    </>
  );
};

export default PatientDetails;
