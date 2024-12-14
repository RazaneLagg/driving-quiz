import React, { useState } from "react";
import MentorsList from "../components/schoolMentorsList";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SchoolProfile.css";

function SchoolProfile({ onJoinSchool }) {
  const [showPopup, setShowPopup] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const openPopup = () => setShowPopup(true);
  const closePopup = () => {
    setShowPopup(false);
    setCode("");
    setError("");
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    setError("");
  };

  const handleSubmit = () => {
 
    const regex = /^[0-9]{6}$/; 
    if (!regex.test(code)) {
      setError("Invalid code. Please enter the 6-digit numeric code you were given by your school .");
      return;
    }
    onJoinSchool();

    navigate("/StudentHome");
  };

  return (
    <div id="schoolProfile">
      <div id="pageContent">
        <div id="schoolContact">
          <div>
            <img id="schoolLogo" src="./assets/images/schoollogo.png" alt="" />
          </div>

          <div id="schoolInformation">
            <div className="schoolDesc">
              <i className="fa-solid fa-location-dot icons"></i>
              <span>cité 123log, Ain Benian, Algiers, Algeria</span>
            </div>
            <div className="schoolDesc">
              <i className="fa-solid fa-phone-flip icons"></i>
              <span>+213556770990</span>
            </div>
            <div className="schoolDesc">
              <i className="fa-solid fa-envelope icons"></i>
              <span>bmw@ensia.edu.dz</span>
            </div>
            <div>
              <button id="joinSchool" onClick={openPopup}>
                <span>Join</span>
              </button>
              {showPopup && (
                <div className="popupOverlay">
                  <div className="popupContent">
                    <button className="closeButton" onClick={closePopup}>
                      x
                    </button>
                    <h3>Enter Your Code</h3>
                    <input
                      type="text"
                      maxLength="6"
                      placeholder="6-digit code"
                      className="popupInput"
                      value={code}
                      onChange={handleCodeChange}
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button className="submitButton" onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div id="schoolInfo">
          <div className="flexStart">
            <span className="title-imane">BMW Advanced M School</span>
            <span id="location">Ain Benian, Algiers, Algeria</span>
            <span className="spacing"></span>
            <span id="schoolYap">
              Experience the ultimate in driving performance with the BMW Advanced M School,
              where enthusiasts and aspiring racers refine their skills behind the wheel of BMW’s legendary M models.
              This elite program offers hands-on training in high-speed car control, precision handling, 
              and advanced racing techniques, all under the guidance of professional instructors. Whether you're a seasoned driver looking 
              to elevate your abilities or an adrenaline seeker ready for the challenge of the racetrack, 
              BMW Advanced M School delivers an unparalleled driving experience.
              Push the limits of physics, master cornering at high speeds, and discover the true potential of BMW's 
              high-performance engineering—all while enjoying a luxurious and safe environment designed for automotive excellence.
            </span>
            <span className="spacing"></span>
            <span className="title-imane">Course Offering</span>
            <ul>
              <li className="courseItem">
                <b>Beginner Driver Course:</b> covers the basics of road rules.
              </li>
              <li className="courseItem">
                <b>Online theory Quizzes:</b> study road rules and traffic laws from your home.
              </li>
              <li className="courseItem">
                <b>Various lessons:</b> we offer different courses helping you thrive.
              </li>
            </ul>
            <span className="spacing"></span>
            <span className="title-imane">Mentors Available</span>
            <MentorsList />
            <span className="spacing"></span>
            <span className="title-imane">Availability And Scheduling</span>
            <ul>
              <li className="courseItem">
                <b>Flexible Scheduling:</b> day, evening or even weekend to suit your ijbol schedule.
              </li>
              <li className="courseItem">
                <b>Course Duration:</b> 1 to 2 weeks, depending on how you do.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolProfile;
