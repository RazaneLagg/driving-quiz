
import React from 'react';
import CourseCard from './CourseCard'; 
import '../styles/CourseSection.css';  

const CourseSection = () => {
  const courses = [
    {
      category: 'Course',
      title: 'Defensive Driving Essentials',
      description: 'Learn the techniques to anticipate and respond to hazards on the road safely.',
      instructor: 'Fatema',
      School: "Greenlight Driving Academy",
      image: "./assets/images/avatarmentor4.jpg"
    },
    {
      category: 'Course',
      title: 'Beginner Driver Intensive',
      description: 'A 14-day crash course to quickly build confidence and skills for new drivers.',
      instructor: 'Salah',
      School: "Highway Stars School",
      image: "./assets/images/salah.jpg"
    },
    {
      category: 'Course',
      title: 'Traffic Rules and Safety Workshop',
      description: 'Focus on traffic signs, rules, and practical safety tips to avoid accidents.',
      instructor: 'Bilel',
      School: "Safe Drive Institute",
      image: "./assets/images/bilel.jpg"
    },
    {
      category: 'Course',
      title: 'Advanced Road Navigation',
      description: 'Master navigation techniques for highways, busy streets, and roundabouts.',
      instructor: 'Salah ',
      School: "Urban Wheels Center",
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
