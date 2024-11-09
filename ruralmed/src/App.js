// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/navbar';
import Appointments from './components/Appointments';
import Dashboard from './components/DoctorDashboard';
import Patients from './components/Patients';
import Login from './components/DrPatientLogin';
import ForgotPassword from './components/ForgotPassword';
import ChangePassword from './components/PasswordChange';
import './components/navbar.css';

function App() {
  const location = useLocation();
  
  // Determine if the current route is "/login", "/forgotpassword", or "/changepassword"
  const isAuthPage = 
    location.pathname === '/login' ||
    location.pathname === '/forgotpassword' ||
    location.pathname === '/changepassword';

  return (
    // Apply a different class name if on any of the authentication-related pages
    <div className={isAuthPage ? 'auth-container' : 'containers'}>
      {/* Only render NavBar if not on the authentication-related pages */}
      {!isAuthPage && <NavBar />}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/changepassword" element={<ChangePassword />} />
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
