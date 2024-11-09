import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import DrLogin from './images/DrLogin.jpg';
import PatientLogin from './images/patientLogin.jpg';

function Login() {
  const [isFlipped, setIsFlipped] = useState(false);

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
                        src={PatientLogin}
                        alt="Patient Login"
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
                          <div class="d-grid gap-2">
                                <button type="button" class="btn btn-success">Login</button>
                          </div>

                          
                        </form>
                        <hr className="mt-5 mb-4 border-secondary-subtle" />
                        <div className="d-flex gap-2 justify-content-md-end">
                          <Link to="/signup" className="link-secondary">Create new account ?</Link>
                          <Link to="/forgotpassword" className="link-secondary">Forgot password ?</Link>
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
                        src={DrLogin}
                        alt="Doctor Login"
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
                          <div class="d-grid gap-2">
                                <button type="button" class="btn btn-success">Login</button>
                          </div>

                        </form>
                        <hr className="mt-5 mb-4 border-secondary-subtle" />
                        <div className="d-flex gap-2 justify-content-md-end">
                          <Link to="/signup" className="link-secondary">Want Credentials ?</Link>
                          <Link to="/forgotpassword" className="link-secondary">Forgot password ?</Link>
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
