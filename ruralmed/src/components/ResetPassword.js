import React, { useState } from 'react';

function ResetPassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Add your password change logic here
    console.log("Password changed successfully!");
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/bs-brain@2.0.4/components/password-resets/password-reset-12/assets/css/password-reset-12.css"
      />
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
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-3 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control border rounded-0"
                            id="npass"
                            placeholder=""
                            required
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                          />
                          <label htmlFor="npass" className="form-label">
                            Old Password
                          </label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control border rounded-0"
                            id="npass"
                            placeholder=""
                            required
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                          />
                          <label htmlFor="npass" className="form-label">
                            New Password
                          </label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control border rounded-0"
                            id="cpass"
                            placeholder=""
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
    </div>
  );
}

export default ResetPassword;
