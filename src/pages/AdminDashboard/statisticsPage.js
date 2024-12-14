import React, { useEffect, useState } from 'react';
import AdminDashNavbar from '../../components/admindashnavbar';
import '../../styles/statisticsPage.css'; // Importing the custom CSS for the page

const StatisticsPage = () => {
  const [stats, setStats] = useState({
    students: 0,
    mentors: 0,
    quizzes: 0,
    courses: 0,
    schools: 0,
  });

  useEffect(() => {
    setStats({
      students: 100,
      mentors: 10,
      quizzes: 5,
      courses: 8,
      schools: 3,
    });
  }, []);

  return (
    <div>
      <AdminDashNavbar />
      <div className="dashboard-page">
        <p className="welcome-text">Welcome to Your Dashboard! Here are the latest statistics:</p>
        
        <h2 className="page-title">Dashboard Statistics</h2>
        
        <div className="stat-container">
          <div className="stat-card">
            <h3>Students</h3>
            <p>{stats.students}</p>
          </div>
          <div className="stat-card">
            <h3>Mentors</h3>
            <p>{stats.mentors}</p>
          </div>
          <div className="stat-card">
            <h3>Schools</h3>
            <p>{stats.schools}</p>
          </div>
          <div className="stat-card">
            <h3>Quizzes</h3>
            <p>{stats.quizzes}</p>
          </div>
          <div className="stat-card">
            <h3>Courses</h3>
            <p>{stats.courses}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
