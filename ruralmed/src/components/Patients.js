import React from 'react';
import './Patients.css';
import accountImg from './images/account.png';
import patientImage from './images/patients.avif';

const Patients = () => {
    // Sample data for patients
    const patients = [
        { id: 1, name: 'John Doe', gender: 'Male', age: 36 },
        { id: 2, name: 'Jane Smith', gender: 'Female', age: 28 },
        { id: 3, name: 'John Doe', gender: 'Male', age: 36 },
        { id: 4, name: 'Alice Brown', gender: 'Female', age: 42 },
        { id: 5, name: 'John Doe', gender: 'Male', age: 36 },
        { id: 6, name: 'Chris Evans', gender: 'Male', age: 29 },
    ];

    return (
        <div className="rightcontainer">
            <div className="background">
                <img src={patientImage} alt="Patients Background" />
            </div>
            <div className="profile">
                <p>John Doe</p>
                <img src={accountImg} alt="Profile" />
            </div>
            <div className="header">
                <div className="main-header">
                    <p>Patients</p>
                </div>
                <div className="search">
                    <form>
                        <input type="search" name="search" placeholder="Search Patients" />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div className="patientContainer">
                {patients.map((patient) => (
                    <div className="patient" key={patient.id}>
                        <img src={accountImg} alt={`${patient.name} Profile`} />
                        <p>{patient.name}</p>
                        <p>{patient.gender}</p>
                        <p>Age: {patient.age}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Patients;
