import React from 'react';

const SignUp = () => {
  return (
    <>
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

          .auth-container {
            background-image: url('./copy-space-phone-desk_23-2148519756.avif');
            background-repeat: no-repeat;
            background-size: cover;
            padding-right: 10px;
            padding-left: 10px;
            padding-top: 20px;
          }

          .auth-footer-container {
            text-align: center;
            margin-top: 20px;
          }

          .auth-footer-container p {
            font-size: 14px;
            color: #555;
          }

          .container {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
          }
        `}
      </style>

      <div className="auth-container py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
              <div className="bg-white rounded shadow-sm">
                {/* Centered heading for portal website */}
                <div className="row">
                  <div className="col-12 text-center">
                    {/* Add your logo image here */}
                    <img
                      src="./Green and White Modern Medical Logo (1).png"
                      alt="RuralMed Logo"
                      style={{ maxWidth: '200px', width: '100%' }}
                    />
                  </div>
                </div>

                <form action="#!" style={{ paddingRight: '3rem', paddingLeft: '3rem' }}>
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
                        required
                      />
                    </div>

                    {/* Terms & Conditions Checkbox */}
                    <div className="col-12">
                      <div className="form-check" style={{ paddingRight: '50px' }}>
                        <label className="switch">
                          <input type="checkbox" />
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
                          Sign up
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
                      <a href="../patient_dr_login/patient_dr_login.html" className="link-primary text-decoration-none">
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
