import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/navbar';
import Appointments from './Doctors/Appointments';
import Dashboard from './Doctors/DoctorDashboard';
import Patients from './Doctors/Patients';
import Login from './Doctors/DrPatientLogin';
import ForgotPassword from './Doctors/ForgotPassword';
import ChangePassword from './Doctors/PasswordChange';
import Signup from './Doctors/SignUp';  // Import your Signup component
import './components/navbar.css';
import ResetPassword from './Doctors/ResetPassword';
import Profile from './Doctors/Profile';
import PatientDetails from './Doctors/PatientDetails';
import FindDoctors from './patients/FindDoctors';

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
    {/* //   {!isAuthPage && <NavBar />} */}
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
        <Route path="/finddoctor" element={<FindDoctors />} />  
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
