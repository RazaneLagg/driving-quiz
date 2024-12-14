import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import StudentSignUp from './studentsignup';
import MentorSignUp from './mentorsignup';

import '../../styles/signup.css';
import '../../styles/global.css';

const SignUpPage = () => {
  const [userType, setUserType] = useState('Student'); 
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    userName: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log('Form Data before step change:', formData);

    setStep(2); 
  };

  const handleStudentSubmit = (studentData) => {
    const completeData = { ...formData, userType, ...studentData };
    console.log('Final Form Data:', completeData); 

    alert("Student account created!");
    navigate('/success'); 
  };


  const handleMentorSubmit = (mentorData) => {
    const completeData = { ...formData, userType, ...mentorData };
    console.log('Final Form Data for Mentor:', completeData);

    alert("Mentor account created!");
    navigate('/success');
  };

  const goBack = () => {
    if (step === 1) navigate(-1);
    else setStep(1);
  };

  return (
    <div className="signup-page">
      <button className="back-arrow" onClick={goBack}>
        <FaArrowLeft />
      </button>

      {step === 1 && (
        <div className="signup-container">
          <div className="signup-box">
            <h1>Sign-up</h1>
            <form className="signup-box1" onSubmit={handleNext}>
              <div className="input-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="userName">User Name</label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  placeholder="User Name"
                  value={formData.userName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="contact">Contact Number</label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>

              <div className="user-type-slider">
                <button
                  type="button"
                  className={`slider-btn ${userType === 'Student' ? 'active' : ''}`}
                  onClick={() => setUserType('Student')}
                >
                  Student
                </button>
                <button
                  type="button"
                  className={`slider-btn ${userType === 'Mentor' ? 'active' : ''}`}
                  onClick={() => setUserType('Mentor')}
                >
                  Mentor
                </button>
              </div>

              <div className="next-btn-container">
                <button type="submit" className="next-btn">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {step === 2 && userType === 'Student' && (
        <StudentSignUp onSubmit={handleStudentSubmit} goBack={goBack} />
      )}

      {step === 2 && userType === 'Mentor' && (
        <MentorSignUp onSubmit={handleMentorSubmit} goBack={goBack} />
      )}
    </div>
  );
};

export default SignUpPage;
