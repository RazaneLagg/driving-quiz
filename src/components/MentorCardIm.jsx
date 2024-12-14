import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MentorCardIm.css';

function MentorCardIm({ picture, name, level, description, location, age, gender, bio, experience, certificates }) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate('/mentorprofile', {
      state: {
        mentorName: name,
        mentorImage: picture,
        mentorLocation: location,
        age,
        gender,
        bio,
        experience,
        certificates,
      },
    });
  };

  return (
    <div id="mentorCard" onClick={handleCardClick} style={{ cursor: 'pointer'}}>
      <div className="mentorPic">
        <img id="mentorPic" src={picture} alt={name} />
      </div>
      <div>
        <div id="mentorInfo">
          <span className="mentorName">{name}</span>
          <span className="mentorLevel">{level}</span>
          <span className="mentorDesc">{description}</span>
        </div>
      </div>
    </div>
  );
}

export default MentorCardIm;
