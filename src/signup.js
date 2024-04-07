import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function SignupForm(props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label htmlFor="email">Email address</label>
            <br />
            <input
              type="email"
              id="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="password-icon"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <div className="form-group mt-3 d-flex justify-content-between">
            <div className="form-check">
              <input
                type="checkbox"
                id="rememberLogin"
                className="form-check-input"
              />
              <label htmlFor="rememberLogin" className="form-check-label">
                Remember My Login
              </label>
            </div>
            <p className="forgot-my">
              <a href="#">Forgot password?</a>
            </p>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
