import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'
import background from './images/background.avif'

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phnno: '',
    email: '',
    password: '',
    cpassword: '',
    terms: false,
  });

  const navigate = useNavigate();

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

  // Handle form data change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle checkbox for terms and conditions
  const handleCheckboxChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      terms: !prevData.terms,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.cpassword) {
      // Assuming the form submission is successful
      navigate('/login'); // Redirect to login after successful signup
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div
      className="bg-light py-3 py-md-5"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingRight: '10px',
      }}
    >
      <style>
        {`
          .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 31px;
          }

          .switch input { 
            opacity: 0;
            width: 0;
            height: 0;
          }

          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 5px;
            bottom: 3px;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
          }

          .slider:before {
            position: absolute;
            content: "";
            height: 22px;
            width: 23px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
          }

          input:checked + .slider {
            background-color: #2196F3;
          }

          input:focus + .slider {
            box-shadow: 0 0 1px #2196F3;
          }

          input:checked + .slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
          }

          /* Rounded sliders */
          .slider.round {
            border-radius: 34px;
          }

          .slider.round:before {
            border-radius: 50%;
          }

        a:active {
            color: #FFFFFF;
        }
        a:visited {
            color: #FFFFFF;
        }
        a{
            text-decoration: none;    
        }
        .signin:active {
            color: #000000;
        }
        .signin:visited {
            color: #000000;
        }
        .signin{
            text-decoration: none;    
        }
        `}
      </style>
      
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
            <div className="bg-white rounded shadow-sm">
              {/* Centered heading for portal website */}
              <div className="row">
                <div className="col-12 text-center">
                  <img
                    src={logo}
                    alt="RuralMed Logo"
                    style={{ maxWidth: '200px', width: '100%' }}
                  />
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                style={{ paddingRight: '3rem', paddingLeft: '3rem' }}
              >
                <div className="row gy-3 gy-md-4">
                  {/* Left column with First Name and Last Name */}
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phnno" className="form-label">
                      Mobile Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="phnno"
                      id="phnno"
                      placeholder="+91"
                      value={formData.phnno}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Right column with Email and Password */}
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="password" className="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="cpassword" className="form-label">
                      Confirm Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="cpassword"
                      id="cpassword"
                      value={formData.cpassword}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Terms & Conditions Checkbox */}
                  <div className="col-12">
                    <div className="form-check" style={{ paddingRight: '50px' }}>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={formData.terms}
                          onChange={handleCheckboxChange}
                        />
                        <span className="slider round"></span>
                      </label>
                      I agree to the{' '}
                      <a href="#!" className="link-primary text-decoration-none">
                        terms and conditions
                      </a>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12">
                    <div className="d-grid">
                      <button className="btn btn-lg btn-primary" type="submit">
                      <Link to="/login"> Sign up </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              {/* Sign-in Link Below Form */}
              <div className="row">
                <div className="col-12" style={{ paddingBottom: '2rem' }}>
                  <hr className="mt-5 mb-4 border-secondary-subtle" />
                  <p className="m-0 text-secondary text-center">
                    Already have an account?{' '}
                    <Link to="/login" className='signin'>
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
