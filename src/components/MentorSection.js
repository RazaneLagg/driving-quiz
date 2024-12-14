import React from 'react';
import MentorCard from './MentorCard'; 
import '../styles/MentorSection.css'; 

const mentors = [
  {
    image: './assets/images/salah.jpg',
    name: 'Salah Eddine',
    title: 'Defensive Driving Expert, RoadWise Driving Academy',
    description: 'Specializes in defensive driving and accident prevention with over 10 years of experience guiding new and experienced drivers.',
  },
  {
    image: './assets/images/bilel.jpg',
    name: 'Bilel Khiri',
    title: 'Traffic Safety Specialist, Highway Safety Institute',
    description: 'Expert in road safety regulations and driver behavior analysis. Committed to making roads safer for all.',
  },
  {
    image: './assets/images/khadija.jpg',
    name: 'Khadidja Arbaoui',
    title: 'Advanced Driving Instructor, Precision Wheels Academy',
    description: 'Certified instructor with expertise in advanced driving skills, including high-speed control and emergency maneuvers.',
  },
  {
    image: './assets/images/avatarmentor2.jpg',
    name: 'Maroua',
    title: 'Traffic Safety Instructor, Safe Driving Academy',
    description: 'Passionate about teaching safe and responsible driving. Focused on building confidence in beginner drivers through practical lessons.',
  },
];

const MentorSection = () => {
  return (
    <div className="mentors-section">
      <p><span style={{ color: '#20B486' }} className="section-header">Tutors</span></p>
      <h2 className="section-title">Meet the Mentor</h2>
      <p className="section-subtitle">
        Our experienced driving instructors from top driving schools bring their expertise to guide learners toward mastering safe and confident driving.
      </p>
      <div className="mentor-cards-container">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}
      </div>
      
      
    </div>
  );
};

export default MentorSection;

