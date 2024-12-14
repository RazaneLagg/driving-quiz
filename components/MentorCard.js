import React from 'react';
import '../styles/MentorCard.css'; 

const MentorCard = ({ mentor }) => {
  return (
    <div className="mentor-card">
      <img 
        src={mentor.image} 
        alt={mentor.name} 
        className="mentor-image" 
      />
      <h3 className="mentor-name">{mentor.name}</h3>
      <p className="mentor-title">{mentor.title}</p>
      <p className="mentor-description">{mentor.description}</p>
    </div>
  );
};

export default MentorCard;
