import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const navigate = useNavigate();

  // Handle password change form submission
  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    // Here you would typically handle the password change logic, such as making an API call to update the password

    // Redirect to login page after password change
    navigate('/login');
  };

  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Change Your Password</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/bs-brain@2.0.4/components/password-resets/password-reset-12/assets/css/password-reset-12.css"
        />
      </head>

      <body>
        <section className="py-3 py-md-5 py-xl-8">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mb-5">
                  <h2 className="display-5 fw-bold text-center">Password Reset</h2>
                  <p className="text-center m-0">Provide your new password.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 col-xl-8">
                <div className="row gy-5 justify-content-center">
                  <div className="col-12 col-lg-5">
                    <form onSubmit={handlePasswordSubmit}>
                      <div className="row gy-3 overflow-hidden">
                        <div className="col-12">
                          <div className="form-floating mb-3">
                            <input
                              type="password"
                              className="form-control border rounded-0"
                              name="npass"
                              id="npass"
                              placeholder=""
                              required
                            />
                            <label htmlFor="npass" className="form-label">
                              New Password
                            </label>
                          </div>
                          <div className="form-floating mb-3">
                            <input
                              type="password"
                              className="form-control border rounded-0"
                              name="cpass"
                              id="cpass"
                              placeholder=""
                              required
                            />
                            <label htmlFor="cpass" className="form-label">
                              Confirm Password
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <button
                              className="btn btn-lg btn-dark rounded-0 fs-6"
                              type="submit"
                            >
                              Change Password
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default ChangePassword;
