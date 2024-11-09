import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  // State to manage the visibility of the forms
  const [isOtpFormVisible, setIsOtpFormVisible] = useState(false);

  // Initialize useNavigate hook
  const navigate = useNavigate();

  // Handle Email Form submission
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setIsOtpFormVisible(true); // Show OTP form and blur the email form
  };

  // Handle OTP Form submission and redirect to the ChangePassword page
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setIsOtpFormVisible(false); // Hide OTP form, blur it, or show success message

    // Redirect to ChangePassword page
    navigate('/changepassword');
  };

  // UseEffect to dynamically load Bootstrap only for this page
  useEffect(() => {
    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'https://unpkg.com/bootstrap@5.3.3/dist/css/bootstrap.min.css';
    bootstrapLink.type = 'text/css';
    document.head.appendChild(bootstrapLink);

    // Cleanup function to remove Bootstrap CSS when the component is unmounted
    return () => {
      document.head.removeChild(bootstrapLink);
    };
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <section className="py-5">
      <div className="container form-container">
        <h2 className="display-5 fw-bold text-center">Password Reset</h2>
        <p className="text-center mb-4">Enter your email to reset your password.</p>

        {/* Email Form */}
        <div id="email-form" className={isOtpFormVisible ? 'blur' : ''}>
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-4">
              <input
                type="email"
                className="form-control border rounded-0"
                name="email"
                id="email"
                placeholder="Email Or Phone"
                required
              />
            </div>
            <div>
              <button type="submit" className="btn btn-lg btn-dark rounded-0">
                Submit Email
              </button>
            </div>
          </form>
        </div>

        {/* OTP Form */}
        <div
          id="otp-form"
          className={`mt-5 ${isOtpFormVisible ? '' : 'blur'}`}
        >
          <form onSubmit={handleOtpSubmit}>
            <div className="mb-4">
              <input
                type="text"
                className="form-control border rounded-0"
                name="otp"
                id="otp"
                placeholder="Enter OTP"
                required
              />
            </div>
            <div>
              <button type="submit" className="btn btn-lg btn-dark rounded-0">
                Submit OTP
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          /* Blur effect for inactive forms */
          .blur {
            filter: blur(4px);
            opacity: 0.6;
            pointer-events: none;
          }
          
          /* For alignment and spacing */
          .form-container {
            max-width: 500px;
            margin: auto;
            text-align: center;
          }
        `}
      </style>
    </section>
  );
};

export default ForgotPassword;
