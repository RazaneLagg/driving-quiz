// MentorHomePage.js
import React from "react";
import MentorLessonCard from "../components/MentorLessonCard";
import "../styles/MentorHomePage.css";
import QuizCard from "../components/QuizCardkhadija";
import { quizzes } from "../data/quizzesMentor";
import { Link } from "react-router-dom";

const MentorHomePage = () => {
  const courses = [
    { image: "./assets/images/officer.png", title: "Course 1" },
    { image: "./assets/images/officer.png", title: "Course 2" },
    { image: "./assets/images/officer.png", title: "Course 3" },
    { image: "./assets/images/officer.png", title: "Course 4" },
    { image: "./assets/images/officer.png", title: "Course 5" },

  ];

  return (
    <div className="mentor-homepage-salah">
      <header className="mentor-header-salah">
        <h1>Welcome, Mentor!</h1>
        <p>Here you can find an overview of your courses and manage them easily.</p>
      </header>

      <section className="recent-courses-salah">
        <div className="section-header-salah">
          <span className="recent-label-salah">Recent</span>

          <Link to="/MentorCourses" className="courses-link-salah">
          <span className="see-all-salah">See All -&gt;</span>
          </Link>
          
        </div>

        <div className="courses-grid-salah">
          {courses.map((course, index) => (
            <Link to="/CourseProfile" key={index} >
              <MentorLessonCard image={course.image} title={course.title} />
            </Link>
          ))}
        </div>

        <div className="section-header-salah">

          <span className="recent-label-salah">Recent</span>
          <Link to="/QuizesMentorView" className="courses-link-salah">
          <span className="see-all-salah">See All -&gt;</span>
          </Link>
        </div>
        

        <div className="quizzes-grid-salah">
        {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} />
         ))}
         </div>
      </section>
    </div>
  );
};

export default MentorHomePage;