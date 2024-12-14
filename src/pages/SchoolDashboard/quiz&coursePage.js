import React from "react";
import DashboardCard from "../../components/DashboardCard";
import DashNavbar from "../../components/schooldashnavbar";
import courses from "../../data/dashboardCourse";
import quizzes from "../../data/dashboardQuiz";
import "../../styles/quiz&coursePage.css";
import { Link } from 'react-router-dom';

const QuizzesAndCoursesPage = () => {



  return (
    <div>
      <DashNavbar />
      <div className="dashboard-card-page">
        <h2>Quizzes and Courses</h2>

        {/* Quizzes Section */}
        <div className="dashboard-card-section">
          <h3>Quizzes</h3>
          <div className="dashboard-card-container">
            {quizzes.map((quiz) => (
            
            <Link to="/QuizProfileDash" key={quiz.id}>

              <DashboardCard
                key={quiz.id}
                title={quiz.title}
                image={quiz.image}
                mentor={quiz.mentor}
              />
                </Link>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div className="dashboard-card-section">
          <h3>Courses</h3>
          <div className="dashboard-card-container">
            {courses.map((course) => (
             <Link to="/LessonProfileDash" key={course.id}>
             <DashboardCard
               title={course.title}
               image={course.image}
               mentor={course.mentor}
             />
           </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizzesAndCoursesPage;
