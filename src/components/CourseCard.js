
import React from 'react';
import '../styles/CourseCard.css';

const CourseCard = ({ category, title, description, instructor, School, image }) => {
  return (
    <div className="course-card">
      <div className="course-image" style={{ backgroundImage: `url("./assets/images/hello.png")` }}></div>
     
      <div className="course-content">
        <span className="course-category">{category}</span>
        <h3>
          {title}

        </h3>
        <p>{description}</p>
        <div className="course-footer">
          <img src= {image} alt="Instructor" className="profile-pic" />
          <div>
            <span>{instructor}</span>
            <span>{School} Enrolled</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

