import React from "react";
import MentorLessonCard from "../components/MentorLessonCard";
import "../styles/MentorCourses.css";
import { Link } from "react-router-dom";

const MentorCourses = () => {
  const courses = [
    { id: 1, image: "./assets/images/officer.png", title: "Road Signs and Markings" },
    { id: 2, image: "./assets/images/officer.png", title: "Road Signs and Markings" },
    { id: 3, image: "./assets/images/officer.png", title: "Road Signs and Markings" },
    { id: 4, image: "./assets/images/officer.png", title: "Road Signs and Markings" },
    { id: 5, image: "./assets/images/officer.png", title: "Road Signs and Markings" },
    { id: 6, image: "./assets/images/officer.png", title: "Road Signs and Markings" },
  ];
 
  return (
    <div class="courses-section-salah">
      <div class="courses-header-salah">
        <h3>All the courses that you have created are here, click here for adding any new course</h3>
        <Link to="/CreateCourse"><button>Create new course</button></Link>
      </div>

      <div className="courses-container-salah">
        {courses.map((course) => (
          <Link to="/CourseProfile"><MentorLessonCard key={course.id} image={course.image} title={course.title} /></Link>
        ))}
      </div>
    </div>
  );
};

export default MentorCourses;
