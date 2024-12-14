import React from 'react';
import '../styles/SchoolCard.css'; 

const SchoolCard = ({ school }) => {
  return (
    <div className="school-card">
      <img src="./assets/images/school2.png" alt={school.name} className="school-logo" />
      <h3 className="school-name">{school.name}</h3>
      <p className="school-location">Location: {school.location}</p>
      <p className="school-description">{school.description}</p>
    </div>
  );
};

export default SchoolCard;


