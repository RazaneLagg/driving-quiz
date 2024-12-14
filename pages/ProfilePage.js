import React, { useState } from "react";
import "../styles/ProfilePage.css";

const ProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState("./assets/images/Avatar.png");

  const experiences = [
    "10 years of experience as a Certified Driving Instructor at SafeDrive Academy.",
    "5 years of experience managing road safety workshops for new drivers.",
    "Instructor for advanced driving techniques, including defensive and eco-driving.",
    "Mentored over 500 students to successfully obtain their driver's licenses.",
  ];

  const certificates = [
    "Certified Driving Instructor - 2014 (International Driving Association)",
    "Defensive Driving Certification - 2016",
    "Road Safety and Traffic Laws Instructor Certification - 2018",
    "Eco-Driving Techniques Certification - 2020",
  ];

  return (
    <div className="profile-page-salah">
      <div className="profile-card-salah">
        <div className="left-section-salah">
          <div className="profile-picture-wrapper-salah">
            <img src={profilePicture} alt="Profile" className="profile-picture-salah" />
          </div>
        </div>

        <div className="right-section-salah">
          <div className="profile-info-salah">
            <h2 className="name-salah">khadidja chamberlin</h2>
            <p className="location-salah">Location: Los Angeles, California</p>
            <p className="age-gender-salah">Age: 26 | Gender: Female</p>
            <p className="description-salah">
              An experienced driving instructor dedicated to teaching safe and responsible driving techniques. Passionate about fostering confidence in new drivers and promoting road safety.
            </p>
          </div>

          <div className="experiences-section-salah">
            <h3 className="section-title-salah">Experiences</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item-wrapper-salah">
                <span className="experience-icon-salah"></span>
                <p className="experience-item-salah">{exp}</p>
              </div>
            ))}
          </div>

          <div className="certificates-section-salah">
            <h3 className="section-title-salah">Certificates</h3>
            {certificates.map((cert, index) => (
              <div key={index} className="certificate-item-wrapper-salah">
                <span className="certificate-icon-salah"></span>
                <p className="certificate-item-salah">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
