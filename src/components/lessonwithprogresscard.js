import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/lessoncardwithprogress.css';

const LessonCardwithProgress = ({ title, image, progress }) => {
  const defaultImage = "./assets/images/officer.png"; 

  return (
    <Link 
      to="/lessonprofile" 
      state={{ title, image: image || defaultImage, progress }} 
      className="learning-card-imane"
    >
      <img src={image || defaultImage} alt={title} className="card-image-imane" />
      <div className="card-content-imane">
        <h3 className="card-title-imane">{title}</h3>
        <div className="progress-bar-imane">
          <div
            className="progress-imane"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </Link>
  );
};

export default LessonCardwithProgress;
