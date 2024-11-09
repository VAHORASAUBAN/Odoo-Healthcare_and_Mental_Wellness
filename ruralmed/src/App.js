import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/navbar';
import Appointments from './components/Appointments';
import Dashboard from './components/DoctorDashboard';
import Patients from './components/Patients';
import Login from './components/DrPatientLogin';
import ForgotPassword from './components/ForgotPassword';
import ChangePassword from './components/PasswordChange';
import Signup from './components/SignUp';  // Import your Signup component
import './components/navbar.css';
import ResetPassword from './components/ResetPassword';
import Profile from './components/Profile';
import PatientDetails from './components/PatientDetails';

function App() {
  const location = useLocation();

  // Determine if the current route is "/login", "/forgotpassword", "/changepassword", or "/signup"
  const isAuthPage = 
    location.pathname === '/login' ||
    location.pathname === '/forgotpassword' ||
    location.pathname === '/changepassword' ||
    location.pathname === '/signup' ||
    location.pathname === '/resetpassword';
      // Include '/signup' in the check

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
        <Route path="/signup" element={<Signup />} />  {/* Add the signup route here */}
        <Route path="/resetpassword" element={<ResetPassword />} />  
        <Route path="/profile" element={<Profile />} />  
        <Route path="/patientdetails" element={<PatientDetails />} />  
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
