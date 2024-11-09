import React from 'react'
import './FindDoctors.css'

export default function FindDoctors() {
  return (
    <div className="container">
    <div className="rightContainer">
      <div className="header">
        <div className="main-header">
          <p>Search for a specialist and make an appointment</p>
        </div>
        <div className="sub-header">
          <p>Select your doctor and preferred time slot to book your appointment</p>
        </div>
      </div>

      <div className="search">
        <div className="upper">
          <p>Book your appointment</p>
        </div>
        <div className="lower">
          <form action="">
            <input type="text" name="findDoctor" placeholder="Speciality/Doctor" />
            <input type="date" name="findDate" />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>

      <div className="doctorContainer">
        {[...Array(7)].map((_, index) => (
          <div className="doctors" key={index}>
            <div className="doctor-main">
              <img src='account.png' alt="Doctor Profile" />
              <p className="name">Dr. John Doe</p>
              <p className="specializations">Neurologist</p>
            </div>
            <div className="extra-info">
              <p className="location"><strong>Location:</strong> Ahmedabad</p>
              <p className="speciality"><strong>Speciality:</strong> Neurology</p>
              <button className="appointment-btn">Book an appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
   
);
}
