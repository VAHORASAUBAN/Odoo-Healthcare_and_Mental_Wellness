import React from 'react';
import NavBar from './components/navbar'; // Importing NavBar component
import Appointments from './components/appointments'; // Import the Appointments component
import './components/navbar.css';  // Your CSS for NavBar
import './components/appointments.css';

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>

function App() {
  return (
    <div className="container">
      <NavBar /> 
      <Appointments /> 
    </div>
  );
}

export default App;
