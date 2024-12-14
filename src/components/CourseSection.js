
import React from 'react';
import CourseCard from './CourseCard'; 
import '../styles/CourseSection.css';  

const CourseSection = () => {
  const courses = [
    {
      category: 'Course',
      title: 'Learner Standard Track Course',
      description: 'If you\'ve never been behind the steering wheel, this course is for you. At the end of 21 days, you\'ll know the basic traffic rules.',
      instructor: 'Salah Yaakoub',
      School: "Souidania school",
      image: "./assets/images/salah.jpg"
    },
    {
        category: 'Course',
        title: 'Learner Standard Track Course',
        description: 'If you\'ve never been behind the steering wheel, this course is for you. At the end of 21 days, you\'ll know the basic traffic rules.',
        instructor: 'Jane Cooper',
        School: "Souidania school",
        image: "./assets/images/salah.jpg"
      },
      {
        category: 'Course',
        title: 'Learner Standard Track Course',
        description: 'If you\'ve never been behind the steering wheel, this course is for you. At the end of 21 days, you\'ll know the basic traffic rules.',
        instructor: 'Salah Yaakoub',
        School: "Souidania school",
      image: "./assets/images/salah.jpg"
      },
      {
        category: 'Course',
        title: 'Learner Standard Track Course',
        description: 'If you\'ve never been behind the steering wheel, this course is for you. At the end of 21 days, you\'ll know the basic traffic rules.',
        instructor: 'Salah Yaakoub',
        School: "Souidania school",
      image: "./assets/images/salah.jpg"
      },
    
  ];

  return (
    <div className="course-section">
      <div className="course-header">
        <p><span className="myspan" style={{ color: '#20B486' }}>Choose Your Course to Drive With Confidence On The Road</span></p>
        <h2>Learn Theoretically. Apply Practically.</h2>
        <p>Perfection comes with seamless integration of learning and application! Become a confident driver by getting theoretical and practical driving training.</p>
      </div>
      <div className="course-cards-container">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
