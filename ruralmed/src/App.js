import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar'; // Importing NavBar component
import Appointments from './components/appointments'; // Import the Appointments component
import DoctorDashboard from './components/DoctorDashboard'; // Import the DoctorDashboard component
import './components/navbar.css';  // Your CSS for NavBar

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar /> {/* Navigation bar with links */}
        <Routes>
          {/* Define Routes here */}
          <Route path="/appointments" element={<Appointments />} /> {/* Appointments page */}
          <Route path="/dashboard" element={<DoctorDashboard />} /> {/* Doctor Dashboard page */}
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;