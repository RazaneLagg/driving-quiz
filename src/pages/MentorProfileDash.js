import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/MentorProfile.css';
import LessonMentorSection from '../components/LessonCreatedSection';

function MentorProfileDash() {
  const location = useLocation();
  const { mentorName, mentorImage, location: mentorLocation, age, gender, bio, experience, certificates } = location.state || {
    mentorName: "Imane Aissat",
    mentorImage: "./assets/images/ning.png", 
    mentorLocation: "Mahelma Zeralda, Algeirs",
    age: "20",
    gender: "Female",
    bio: "Imane is an experienced driving mentor with a passion for teaching others the essential skills needed to become safe and confident drivers. With over 3 years of hands-on experience, she has guided numerous students through both theoretical and practical driving lessons. Imane has a calm and patient demeanor, which allows her to help nervous beginners feel at ease while learning how to drive. She is committed to ensuring each student understands road safety, traffic laws, and vehicle handling, making sure they are well-prepared for their driving test and the road ahead.",
    experience: [],
    certificates: "No attached certificates.",
  };

  return (
    <div id="mentorProfile">
      
      <div id="profilepagecontent">
        <div id="instructorSection">
          <div id="instructorPic">
            <img src={mentorImage} alt={mentorName} />
          </div>
          <div id="instructorInfo">
            <div className="title">{mentorName}</div>
            <div id="Location">{mentorLocation}</div>
            <span className="spacing"></span>
            <div>
              <b>Age: </b>{age} years old
            </div>
            <div>
              <b>Gender: </b>{gender}
            </div>
            <span className="spacing"></span>
            <span>{bio}</span>
            <span className="spacing"></span>
            <span className="spacing"></span>
            <div className="title">Experiences And Qualifications</div>
            <span className="spacing"></span>
            <div className="Subtitle">Certificates</div>
            <span>{certificates}</span>
            <span className="spacing"></span>
            <div className="Subtitle">Experience</div>
            <ul>
              {experience.length > 0 ? (
                experience.map((item, index) => (
                  <li className="experienceItem" key={index}>{item}</li>
                ))
              ) : (
                <li className="experienceItem">No experience information available</li>
              )}
            </ul>
            <span className="spacing"></span>
            <span className="spacing"></span>
            <span className="spacing"></span>
            <div>
              <LessonMentorSection type="lessons" />
            </div>
            <span className="spacing"></span>
            <span className="spacing"></span>
            <span className="spacing"></span>
            <div>
              <LessonMentorSection showSeeAll={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorProfileDash;
