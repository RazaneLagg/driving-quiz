
import React from "react";
import "../styles/mentorlessoncard.css";

const MentorLessonCard = ({ image, title }) => {
  return (
    <div className="card-container-salah">
      <img src={image} alt={title} className="card-image-salah" />
      <div className="card-title-salah">{title}</div>
    </div>
  );
};

export default MentorLessonCard;
