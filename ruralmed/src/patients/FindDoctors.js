import React from 'react'
import { Link } from 'react-router-dom';
import './FindDoctors.css'
import PatientNavBar from '../components/PatientNavBar'

export default function FindDoctors() {
  return (
    <>
      <PatientNavBar />
      <div className="FindDoctors__rightContainer">
        <div className="FindDoctors__header">
          <div className="FindDoctors__main-header">
            <p>Search for a specialist and make an appointment</p>
          </div>
          <div className="FindDoctors__sub-header">
            <p>Select your doctor and preferred time slot to book your appointment</p>
          </div>
        </div>

        <div className="FindDoctors__search">
          <div className="FindDoctors__upper">
            <p>Book your appointment</p>
          </div>
          <div className="FindDoctors__lower">
            <form action="">
              <input type="text" name="findDoctor" placeholder="Speciality/Doctor" />
              <input type="date" name="findDate" />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>

        <div className="FindDoctors__doctorContainer">
          {[...Array(7)].map((_, index) => (
            <div className="FindDoctors__doctors" key={index}>
              <div className="FindDoctors__doctor-main">
                <img src='account.png' alt="Doctor Profile" />
                <p className="FindDoctors__name">Dr. John Doe</p>
                <p className="FindDoctors__specializations">Neurologist</p>
              </div>
              <div className="FindDoctors__extra-info">
                <p className="FindDoctors__location"><strong>Location:</strong> Ahmedabad</p>
                <p className="FindDoctors__speciality"><strong>Speciality:</strong> Neurology</p>
                <button className="FindDoctors__appointment-btn"><Link to='/Patient/GetAppointment'>Book an appointment</Link></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
