import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../styles/resetPassword.css';
import '../../styles/global.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError('');
    setSuccessMessage('');

    if (!email) {
      setEmailError('Email is required');
      return;
    }

    // Mock sending a reset link
    setSuccessMessage('A password reset link has been sent to your email.');
  };

  const goBack = () => {
    navigate('/login');
  };

  return (
    <div className="reset-password-page">
      <div className="reset-password-container">
        <div className="reset-password-form">
          <button className="back-arrow" onClick={goBack}>
            <FaArrowLeft />
          </button>
          <h2>Reset Your Password</h2>
          <p>Enter your registered email address to receive a password reset link.</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={emailError ? 'error' : ''}
              />
              {emailError && <span className="error-message">{emailError}</span>}
            </div>
            <button type="submit" className="btn-reset">
              Send Reset Link
            </button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
          <p>
            Remember your password? <Link to="/login">Log in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
