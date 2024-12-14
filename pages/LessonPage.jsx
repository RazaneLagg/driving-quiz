import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../styles/LessonPage.css";
import { Link } from "react-router-dom"; 

const lessons = [
  { id: 1, title: "Lesson 1: Introduction about driving 1", duration: "2 minutes", videoUrl: "https://www.youtube.com/watch?v=CCCUTqJ3dBA&list=PLzo8Xp5O7px2raRp5ixZEsVfxyYlbM6K6" },
  { id: 2, title: "Lesson 2: How to drive a manual car", duration: "6 minutes", videoUrl: "https://www.youtube.com/watch?v=VIVaqt4VhKc" },
  { id: 3, title: "Lesson 3: Introduction about driving 2", duration: "40 seconds", videoUrl: "https://www.youtube.com/watch?v=3dx04Vz3jiI" },
];

const LessonPage = () => {
  const [currentVideo, setCurrentVideo] = useState(lessons[0].videoUrl); 
  const handleLessonChange = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  return (
    <div className="lesson-page-container">
      <div className="video-container">
        <ReactPlayer
          url={currentVideo}
          width="100%"
          height="480px"
          controls
        />
      </div>
      <div className="lesson-header">
        <h1>Road Signs and Markings</h1>
        <p>Learn how to navigate complex intersections safely and confidently.</p>
      </div>

      
      <div className="lesson-content">
        <h2>Lesson Content</h2>
        <ul>
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <input
                type="radio"
                id={`lesson${lesson.id}`}
                name="lesson"
                onChange={() => handleLessonChange(lesson.videoUrl)}
              />
              <label htmlFor={`lesson${lesson.id}`}>
                {lesson.title}
              </label>
              <span>{lesson.duration}</span>
            </li>
          ))}
        </ul>
      </div>

      
      
    </div>
    
  );
};

export default LessonPage;
