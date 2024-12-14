import React from 'react';
import SchoolCard from './SchoolCard'; 
import '../styles/SchoolSection.css'; 

const schools = [
  {
    logo: '../../public/assets/Avatar (3).png',
    name: 'RoadWise Driving Academy',

    location: 'Ain benian Alger',

    description: 'Specializes in defensive driving and road safety training.',
  },
  {
    logo: '../assets/Avatar (4).png',
    name: 'Smooth Ride Institute',

    location: 'Souidania, Alger',

    description: 'Specializes in defensive driving and road safety training.',
  },
  {
    logo: '../assets/Avatar (3).png',
    name: 'DriveSmart Academy',

    location: 'Mahelma Alger',

    description: 'Known for its expert instructors and high pass rates.',
  },
  {
    logo: '../assets/Avatar (4).png',
    name: 'Precision Driving Academy',

    location: 'Staoueli AAlger',

    description: 'Offers advanced vehicle maneuver and highway driving training.',
  },
];

const SchoolsSection = () => {
  return (
    <section className="schools-section">
      <div className="container">
        <p><span style={{ color: '#20B486' }}>Schools</span></p>
        <h2 className="section-title">Enroll in the Best Driving Schools</h2>
        <p className="section-subtitle">
          We’ve partnered with top driving schools to provide you with the best learning experience.
          Choose a school near you and start your journey toward becoming a confident and responsible driver.
        </p>
        <div className="schools-grid">
          {schools.map((school, index) => (
            <SchoolCard key={index} school={school} />
          ))}
        </div>
        <div className="how-to-enroll">
          <h3>How to Enroll</h3>
          <p>Browse the list of driving schools available in your area.</p>
          <p>Click Learn More or Enroll Now to view school details.</p>
          <p>Register directly through our website for a seamless sign-up process.</p>
          <a href="#" className="cta-link">Discover the Perfect School for You! →</a>
        </div>
      </div>
    </section>
  );
};

export default SchoolsSection;
