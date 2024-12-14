import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import { FaGoogle, FaArrowLeft } from 'react-icons/fa';  
import '../../styles/login.css';
import '../../styles/global.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
  
    setEmailError('');
    setPasswordError('');
  
    let isValid = true;
  
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }
  
    if (isValid) {
      if (email === 'admin@example.com') {
        navigate('/admindashboard/statistics');
        
      } else if (email === 'school@example.com') {
        navigate('/dashboard/statistics');

      }else if (email === 'student@example.com') {
        navigate('/UserFirstHomePage');

      }else if (email === 'mentor@example.com') {
        navigate('/MentorHomePage');
      }else {
        setEmailError('Invalid email or unauthorized access');
      }
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <button className="back-arrow" onClick={goBack}><FaArrowLeft /></button>
          <h2>Welcome!</h2>
          <h1>Log-in</h1>
          <form  className="login-form1" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Enter your username or email address</label>
              <input
                type="email"
                id="email"
                placeholder="Username or email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={emailError ? 'error' : ''}
              />
              {emailError && <span className="error-message">{emailError}</span>}
            </div>
            <div className="input-group">
              <label htmlFor="password">Enter your Password</label>
              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={passwordError ? 'error' : ''}
                />
                <span className="eye-icon" onClick={togglePasswordVisibility}>👁️</span>
              </div>
              {passwordError && <span className="error-message">{passwordError}</span>}
            </div>
            <button type="submit" className="btn-login">Log in</button>
          </form>
          <p>Forgot Password? <Link to="/ResetPassword">Reset here</Link></p>
          <div className="or-divider">OR</div>
          <div className="social-login">
            <button className="social-btn google-btn">
              <FaGoogle className="social-icon" /> Sign in with Google
            </button>
          </div>
          <p>No Account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
