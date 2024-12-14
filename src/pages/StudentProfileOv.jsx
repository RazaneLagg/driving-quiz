import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/MentorProfile.css';


function StudentProfile() {
  const location = useLocation();
  const { studentName, studentImage, location: studentLocation, age, gender, bio } = location.state || {
    studentName: "Imane Aissat",
    studentImage: "./assets/images/ning.png", 
    studentLocation: "Ain Benian, Algeirs",
    age: "20",
    gender: "Female",
    bio: "whatever",
  };

  return (
    <div id="mentorProfile">
      
      <div id="profilepagecontent">
        <div id="instructorSection">
          <div id="instructorPic">
            <img src={studentImage} alt={studentName} />
          </div>
          <div id="instructorInfo">
            <div className="title">{studentName}</div>
            <div id="Location">{studentLocation}</div>
            <span className="spacing"></span>
            <div>
              <b>Age: </b>{age} years old
            </div>
            <div>
              <b>Gender: </b>{gender}
            </div>
            <span className="spacing"></span>
            <span>{bio}</span>
            <span className="spacing"></span>
            <span className="spacing"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
