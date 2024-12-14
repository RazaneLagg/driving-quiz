import React from 'react';
import MentorCardIm from './MentorCardIm';

function MentorsList() {
  const mentors = [
    {
      picture: './assets/images/avatarmentor.jpg',
      name: 'Yasmine Massad',
      level: 'Senior Driving Instructor',
      description: '15 years of experience, expert',
      location: 'Oran, Algeria',
      age: '45',
      gender: 'Female',
      bio: 'Yasmine is a seasoned driving instructor with over 15 years of experience teaching students to drive confidently and safely. She specializes in advanced road safety techniques.',
      experience: ['15 years as a senior instructor', 'Expert in defensive driving', 'Conducted over 1000 practical tests'],
      certificates: 'Certified Defensive Driving Instructor'
    },
    {
      picture: './assets/images/avatarmentor2.jpg',
      name: 'Meriem Maroua',
      level: 'Vehicle Maneuver Expert',
      description: 'Vehicle and motorcycles driver',
      location: 'Setif, Algeria',
      age: '32',
      gender: 'Female',
      bio: 'Meriem is an experienced driver specializing in vehicle and motorcycle maneuvering. She has helped numerous students master complex vehicle handling techniques.',
      experience: ['8 years in vehicle maneuver training', 'Motorcycle and car specialist', 'Taught precision parking and cornering skills'],
      certificates: 'Certified Motorcycle Handling Specialist'
    },
    {
      picture: './assets/images/avatarmentor3.jpg',
      name: 'Soundous M',
      level: 'Vehicle Maneuver Expert',
      description: 'Ex taxi driver',
      location: 'Tizi Ouzou, Algeria',
      age: '38',
      gender: 'Female',
      bio: 'Soundous has years of professional driving experience as a former taxi driver. She focuses on urban driving challenges and traffic navigation skills.',
      experience: ['5 years as a professional taxi driver', 'Specialized in urban traffic management', 'Expert in passenger safety'],
      certificates: 'Taxi Operations Safety Certificate'
    },
    {
      picture: './assets/images/avatarmentor4.jpg',
      name: 'Fatema From',
      level: 'Vehicle Maneuver Expert',
      description: '',
      location: 'Mahelma Zeralda, Algeria',
      age: '29',
      gender: 'Female',
      bio: 'Fatema is a skilled mentor with expertise in vehicle maneuvering. She has a calm demeanor and is adept at teaching nervous beginners.',
      experience: ['3 years in vehicle maneuvering instruction', 'Focus on beginner confidence-building', 'Specialist in reversing and parallel parking'],
      certificates: 'Beginner Driver Coaching Certificate'
    }
  ];

  return (
    <div id="mentorsList">
      {mentors.map((mentor, index) => (
        <MentorCardIm
          key={index}
          picture={mentor.picture}
          name={mentor.name}
          level={mentor.level}
          description={mentor.description}
          location={mentor.location}
          age={mentor.age}
          gender={mentor.gender}
          bio={mentor.bio}
          experience={mentor.experience}
          certificates={mentor.certificates}
        />
      ))}
    </div>
  );
}

export default MentorsList;
