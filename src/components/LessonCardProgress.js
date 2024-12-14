import React from 'react';
import '../styles/LessonCardProgress.css'; 
import { Link } from 'react-router-dom';

const LessonCardProgress = ({ title, image, progress }) => {
  return (
    <div className="learning-card">
      <Link to="/lessonprofile" className="learning-card-imane">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LessonCardProgress;
