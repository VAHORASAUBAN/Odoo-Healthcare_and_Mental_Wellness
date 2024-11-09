import React, { useState } from 'react';

function Login() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <style>
        {`
          .flip-container {
            perspective: 1000px;
          }

          .flipper {
            transition: 0.9s;
            transform-style: preserve-3d;
            position: relative;
          }

          .front,
          .back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            backface-visibility: hidden;
          }

          .front {
            z-index: 2;
            transform: rotateY(0deg);
          }

          .back {
            transform: rotateY(180deg);
          }

          .flip .flipper {
            transform: rotateY(180deg);
          }

          .image-container {
            transition: transform 0.9s ease;
          }

          .flip .front .image-container,
          .flip .back .image-container {
            transform: translateX(100%);
          }

          .flip .back .login-container {
            transform: translateX(-100%);
          }
        `}
      </style>

      <section className={`flip-container ${isFlipped ? 'flip' : ''}`}>
        <div className="flipper">
          {/* Front Side */}
          <div className="front">
            <section className="p-3 p-md-4 p-xl-5">
              <div className="container">
                <div className="card border-light-subtle shadow-sm">
                  <div className="row g-0">
                    <div className="col-12 col-md-6 image-container">
                      <img
                        className="img-fluid rounded-start w-100 h-100"
                        src="./1650_U1RVRElPIEtBVCAzNzEtMTM.jpg"
                        alt="BootstrapBrain Logo"
                      />
                    </div>
                    <div className="col-12 col-md-6 login-container">
                      <div className="card-body p-3 p-md-4 p-xl-5">
                        <h3>Log in</h3>
                        <form>
                          <label className="form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="name@example.com"
                            required
                          />
                          <label className="form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            required
                          />
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="remember_me"
                            />
                            <label className="form-check-label text-secondary">
                              Keep me logged in
                            </label>
                          </div>
                          <button type="submit" className="btn btn-primary bsb-btn-xl d-grid">
                            Log in
                          </button>
                        </form>
                        <hr className="mt-5 mb-4 border-secondary-subtle" />
                        <div className="d-flex gap-2 justify-content-md-end">
                          <a href="#!" className="link-secondary">Create new account ?</a>
                          <a href="#!" className="link-secondary">Forgot password ?</a>
                          <a href="#!" onClick={handleFlip} className="link-secondary">
                            Or If Doctor ? →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Back Side */}
          <div className="back">
            <section className="p-3 p-md-4 p-xl-5">
              <div className="container">
                <div className="card border-light-subtle shadow-sm">
                  <div className="row g-0">
                    <div className="col-12 col-md-6 image-container">
                      <img
                        className="img-fluid rounded-start w-100 h-100"
                        src="./vecteezy_a-patient-consults-a-doctor-and-nurse_.jpg"
                        alt="Doctor and Nurse"
                      />
                    </div>
                    <div className="col-12 col-md-6 login-container">
                      <div className="card-body p-3 p-md-4 p-xl-5">
                        <h3>Doctor Log in</h3>
                        <form>
                          <label className="form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="name@example.com"
                            required
                          />
                          <label className="form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            required
                          />
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="remember_me"
                            />
                            <label className="form-check-label text-secondary">
                              Keep me logged in
                            </label>
                          </div>
                          <button type="submit" className="btn btn-primary bsb-btn-xl d-grid">
                            Log in
                          </button>
                        </form>
                        <hr className="mt-5 mb-4 border-secondary-subtle" />
                        <div className="d-flex gap-2 justify-content-md-end">
                          <a href="#!" className="link-secondary">Want Credentials ?</a>
                          <a href="#!" className="link-secondary">Forgot password ?</a>
                          <a href="#!" onClick={handleFlip} className="link-secondary">
                            Or If Patient ? →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
