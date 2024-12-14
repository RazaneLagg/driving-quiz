// DashboardCard.js
import React from "react";
import "../styles/DashboardCard.css"; // Make sure this is imported

const DashboardCard = ({ title, image, mentor, onClick }) => {
  return (
    <div className="dashboard-card" onClick={onClick}>
      {/* Card Image */}
      <img className="dashboard-card-image" src={image} alt={title} />
      
      {/* Card Content */}
      <div className="dashboard-card-content">
        <h4 className="dashboard-card-title">{title}</h4>
      </div>
      
      {/* Card Footer */}
      <div className="dashboard-card-footer">
        <img 
          className="dashboard-card-mentor-profile-pic" 
          src={mentor.profilePic} 
          alt={mentor.name} 
        />
        <p className="dashboard-card-mentor-name">{mentor.name}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
