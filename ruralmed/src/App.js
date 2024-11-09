// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar'; // Importing NavBar component
import Appointments from './components/Appointments'; // Import the Appointments component
import Dashboard from './components/DoctorDashboard'; // Assuming you have a Dashboard component// Assuming you have a Patients component
import './components/navbar.css';  // Your CSS for NavBar // Your CSS for Patients (if any)

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/patients" element={<Patients />} /> */}
          {/* Add other routes as necessary */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
