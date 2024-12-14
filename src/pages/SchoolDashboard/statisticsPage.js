import React, { useEffect, useState } from 'react';
import DashNavbar from '../../components/schooldashnavbar';
import '../../styles/statisticsPage.css';

const StatisticsPage = () => {
  const [stats, setStats] = useState({
    students: 100,
    mentors: 10,
    quizzes: 5,
    courses: 8,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [schoolId, setSchoolId] = useState('');

  // Generate Random ID
  const generateRandomId = () => {
    const randomId = `${Math.floor(100000 + Math.random() * 900000)}`;
    setSchoolId(randomId);
    setIsModalOpen(true);
  };

  // Copy ID to Clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(schoolId);
    alert('School ID copied to clipboard!');
  };

  return (
    <div>
      <DashNavbar />
      <div className="dashboard-page">
        {/* Welcome message */}
        <p className="welcome-text">Welcome to Your Dashboard! Here are the latest statistics:</p>

        {/* Page title */}
        <h2 className="page-title">Dashboard Statistics</h2>

        {/* Statistics Container */}
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
            <h3>Quizzes</h3>
            <p>{stats.quizzes}</p>
          </div>
          <div className="stat-card">
            <h3>Courses</h3>
            <p>{stats.courses}</p>
          </div>
        </div>

        {/* Get ID Section */}
        <div className="get-id-section" style={{ marginTop: '40px', textAlign: 'center' }}>
          <h2>Generate Your School ID</h2>
          <button onClick={generateRandomId} style={{ padding: '10px 20px', backgroundColor: 'lightblue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Get ID
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h3>Your School ID</h3>
              <p>{schoolId}</p>
              <button onClick={copyToClipboard}>Copy ID</button>
              <button onClick={() => setIsModalOpen(false)} style={{ marginLeft: '10px' }}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatisticsPage;
