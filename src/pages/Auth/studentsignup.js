import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const StudentSignUp = ({ onSubmit, goBack }) => {
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [licenseStatus, setLicenseStatus] = useState("");
  const [preferredQuizType, setPreferredQuizType] = useState("");
  
  const [dropdownOpen, setDropdownOpen] = useState({
    gender: false,
    licenseStatus: false,
    preferredQuizType: false,
  });

  const toggleDropdown = (field) => {
    setDropdownOpen((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Sign Up As Student</h1>
        <form>
          <div className="input-group">
            <label htmlFor="address">Address/City</label>
            <input
              type="text"
              id="address"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="input-group-row">
            <div className="input-group">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                id="age"
                placeholder="Enter Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div
              className={`input-group ${
                dropdownOpen.gender ? "select-open" : ""
              }`}
            >
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                value={gender}
                onClick={() => toggleDropdown("gender")}
                onBlur={() => toggleDropdown("gender")}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <FaChevronDown className="select-icon" />
            </div>
          </div>

          <div
            className={`input-group ${
              dropdownOpen.licenseStatus ? "select-open" : ""
            }`}
          >
            <label htmlFor="licenseStatus">License Status</label>
            <select
              id="licenseStatus"
              value={licenseStatus}
              onClick={() => toggleDropdown("licenseStatus")}
              onBlur={() => toggleDropdown("licenseStatus")}
              onChange={(e) => setLicenseStatus(e.target.value)}
            >
              <option value="Valid">Valid</option>
              <option value="Expired">Expired</option>
              <option value="Not Applied">Not Applied</option>
            </select>
            <FaChevronDown className="select-icon" />
          </div>

          <div
            className={`input-group ${
              dropdownOpen.preferredQuizType ? "select-open" : ""
            }`}
          >
            <label htmlFor="preferredQuizType">Preferred Quiz Type</label>
            <select
              id="preferredQuizType"
              value={preferredQuizType}
              onClick={() => toggleDropdown("preferredQuizType")}
              onBlur={() => toggleDropdown("preferredQuizType")}
              onChange={(e) => setPreferredQuizType(e.target.value)}
            >
              <option value="Theory">Theory</option>
              <option value="Practical">Practical</option>
              <option value="Both">Both</option>
            </select>
            <FaChevronDown className="select-icon" />
          </div>

          <div className="next-btn-container">
            <Link to="/UserFirstHomePage">
              <button type="button" className="next-btn">
                Sign Up
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentSignUp;
