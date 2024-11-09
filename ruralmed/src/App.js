// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/navbar';
import Appointments from './components/Appointments';
import Dashboard from './components/DoctorDashboard';
import Patients from './components/Patients';
import Login from './components/DrPatientLogin';
import './components/navbar.css';

function App() {
  const location = useLocation();
  
  // Determine if the current route is "/login"
  const isLoginPage = location.pathname === '/login';

  return (
    // Apply a different class name if on the login page
    <div className={isLoginPage ? 'login-container' : 'containers'}>
      {/* Only render NavBar if not on the login page */}
      {!isLoginPage && <NavBar />}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/login" element={<Login />} />
        {/* Add other routes as necessary */}
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
