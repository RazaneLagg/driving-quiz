import React from 'react';
import MentorCard from './MentorCard'; 
import '../styles/MentorSection.css'; 

const mentors = [
  {
    image: './assets/images/salah.jpg',
    name: 'salah eddine',
    title: 'Driving Safety Expert, RoadWise Driving Academy',
    description: 'Over 10 years of experience teaching road safety and defensive driving techniques. Certified in advanced road safety measures.',
  },
  {
    image: './assets/images/bilel.jpg',
    name: 'bilel khiri',
    title: 'Driving Safety Expert, RoadWise Driving Academy',
    description: 'Over 10 years of experience teaching road safety and defensive driving techniques. Certified in advanced road safety measures.',
  },
  {
    image: './assets/images/khadija.jpg',
    name: 'khadidja arbaoui',
    title: 'Driving Safety Expert, RoadWise Driving Academy',
    description: 'Over 10 years of experience teaching road safety and defensive driving techniques. Certified in advanced road safety measures.',
  },
  {
    image: './assets/images/salah.jpg',
    name: 'ahmed rafik',
    title: 'Traffic Safety Instructor, Safe Driving Academy',
    description: 'Passionate about teaching new drivers the fundamentals of safe driving. Experienced in defensive driving techniques.',
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

