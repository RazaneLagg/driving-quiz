// SchoolEnrolledSettings.js
import React, { useState } from 'react';
import '../styles/SchoolEnrolledSettings.css';

function SchoolEnrolledSettings() {
  const [schoolName, setSchoolName] = useState('BMW Advanced M School');
  const [message, setMessage] = useState('');

  const handleUnroll = () => {
    setMessage(`You have successfully unrolled from ${schoolName}.`);
    setSchoolName('');
  };

  return (
    <div className="school-enrolled-container">
      <h1 className="title">School Enrollment</h1>
      {schoolName ? (
        <div className="enrollment-details">
          <p>You are currently enrolled at:</p>
          <h2 className="school-name">{schoolName}</h2>
          <button className="unroll-button" onClick={handleUnroll}>Unroll</button>
        </div>
      ) : (
        <p className="no-enrollment-message">You are not enrolled in any school.</p>
      )}
      {message && <p className="message success">{message}</p>}
    </div>
  );
}

export default SchoolEnrolledSettings;