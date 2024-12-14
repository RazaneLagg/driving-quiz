import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';

const MentorSignUp = ({ onSubmit, goBack }) => {
  const [mentorData, setMentorData] = useState({
    specialization: '',
    age: '',
    address: '',
    affiliation: '',
    cv: null,
    biography: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMentorData({ ...mentorData, [name]: value });
  };

  const handleFileChange = (file) => {
    setMentorData({ ...mentorData, cv: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mentorData.cv) {
      alert('Please upload your CV.');
      return;
    }

    const formData = new FormData();
    Object.keys(mentorData).forEach((key) => {
      formData.append(key, mentorData[key]);
    });

    alert('Mentor account created successfully!');
    onSubmit(mentorData);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('drag-over');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileChange(file);
    }
  };

  const handleFileClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="signup-page">
       <button className="back-arrow" onClick={goBack}>
        <FaArrowLeft />
      </button>

      <div className="signup-container">
        <div className="signup-box">
          <h1>Mentor Sign-up</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="specialization">Specialization</label>
              <div className="select-container">
                <select
                  id="specialization"
                  name="specialization"
                  value={mentorData.specialization}
                  onChange={handleChange}
                >
                  <option value="">Select Specialty</option>
                  <option value="Defensive Driving">Defensive Driving</option>
                  <option value="Road Safety">Road Safety</option>
                  <option value="Vehicle Maintenance">Vehicle Maintenance</option>
                </select>
                <FaChevronDown className="select-icon" />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Select age"
                value={mentorData.age}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="address">Address/City</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter address"
                value={mentorData.address}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="affiliation">Driving School Affiliation</label>
              <div className="select-container">
                <select
                  id="affiliation"
                  name="affiliation"
                  value={mentorData.affiliation}
                  onChange={handleChange}
                >
                  <option value="">Select your driving school affiliation</option>
                  <option value="School A">School A</option>
                  <option value="School B">School B</option>
                  <option value="School C">School C</option>
                </select>
                <FaChevronDown className="select-icon" />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="cv">Upload CV</label>
              <div
                className="file-upload-container"
                onClick={handleFileClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  id="fileInput"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e.target.files[0])}
                />
                <i className="file-upload-icon fa fa-file-upload"></i>
                <p className="file-upload-text">
                  {mentorData.cv ? mentorData.cv.name : 'Drag & Drop your CV here, or click to upload'}
                </p>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="biography">Optional Biography</label>
              <textarea
                id="biography"
                name="biography"
                placeholder="Write a short biography..."
                value={mentorData.biography}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="next-btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MentorSignUp;
