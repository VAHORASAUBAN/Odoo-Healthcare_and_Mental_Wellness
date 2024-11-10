import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavBar() {
  // Initialize state with values from localStorage or default values
  const [selectedUpper, setSelectedUpper] = useState(localStorage.getItem('selectedUpper') || 'dashboard');
  const [selectedLower, setSelectedLower] = useState(localStorage.getItem('selectedLower') || '');

  useEffect(() => {
    // Store selected menus in localStorage whenever they change
    localStorage.setItem('selectedUpper', selectedUpper);
    localStorage.setItem('selectedLower', selectedLower);
  }, [selectedUpper, selectedLower]);

  // Function to load the Google Translate script dynamically
  const loadGoogleTranslateScript = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      
      // Handle script loading success and error
      script.onload = () => {
        console.log('Google Translate script loaded successfully.');
        resolve();
      };
      script.onerror = (error) => {
        console.error('Error loading Google Translate script:', error);
        reject(error);
      };
      
      document.body.appendChild(script);
    });
  };

  // Function to initialize Google Translate
  const initializeGoogleTranslate = () => {
    if (window.google && window.google.translate) {
      try {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,hi,gu', // Limit to English, Hindi, and Gujarati
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        }, 'google_translate_element');
      } catch (error) {
        console.error('Error initializing Google Translate:', error);
      }
    } else {
      console.error('Google Translate API not loaded properly.');
    }
  };

  useEffect(() => {
    loadGoogleTranslateScript()
      .then(() => {
        // Initialize Google Translate after script is loaded
        window.googleTranslateElementInit = initializeGoogleTranslate;
      })
      .catch((error) => {
        console.error('Error loading or initializing Google Translate:', error);
      });

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      const script = document.querySelector('script[src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleSelectUpper = (menu) => {
    setSelectedUpper(menu);
    setSelectedLower(''); // Reset lower selection on upper selection
  };

  const handleSelectLower = (menu) => {
    setSelectedLower(menu);
    setSelectedUpper(''); // Reset upper selection on lower selection
  };

  return (
    <div className="leftcontainer">
      <div className="navbar">
        <div className="upper">
          <div className="logo">
            <p>RURALMED</p>
          </div>
          <div className="menus">
            <ul>
              <li
                className={selectedUpper === 'dashboard' ? 'selected' : ''}
                onClick={() => handleSelectUpper('dashboard')}
              >
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li
                className={selectedUpper === 'appointments' ? 'selected' : ''}
                onClick={() => handleSelectUpper('appointments')}
              >
                <Link to="/appointments">Appointments</Link>
              </li>
              <li
                className={selectedUpper === 'patients' ? 'selected' : ''}
                onClick={() => handleSelectUpper('patients')}
              >
                <Link to="/patients">Patients</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lower">
          <ul>
            <li
              className={`settings-menu ${selectedLower === 'settings' ? 'selected' : ''}`}
              onClick={() => handleSelectLower('settings')}
            >
              Settings
              <ul className="settings-dropdown">
                <li><Link to="/profile">Manage Profile</Link></li>
                <li><Link to="/resetpassword">Reset Password</Link></li>
              </ul>
            </li>
            <li
              className={selectedLower === 'logout' ? 'selected' : ''}
              onClick={() => handleSelectLower('logout')}
            >
              Logout
            </li>
          </ul>
        </div>

        {/* Google Translate Element */}
        <div id="google_translate_element" style={{ display: 'inline-block', marginLeft: '10px' }}></div>
      </div>
    </div>
  );
}

export default NavBar;
