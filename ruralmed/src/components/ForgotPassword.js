import React from 'react';

const SignUp = () => {
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
            <button type="submit" class="btn btn-primary">Submit</button>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
