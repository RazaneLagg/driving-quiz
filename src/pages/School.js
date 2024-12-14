import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashNavbar from '../components/schooldashnavbar';
import MentorsPage from './SchoolDashboard/mentorsPage';
import ProfileSettingsPage from './SchoolDashboard/profileSettingsPage';
import QuizzesAndCoursesPage from './SchoolDashboard/quiz&coursePage';
import StatisticsPage from './SchoolDashboard/statisticsPage';
import StudentsPage from './SchoolDashboard/studentsPage';

const SchoolDashboard = () => {
  return (
    <div>
      <DashNavbar />
      <div className="content">
        <Routes>
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/quizzes-courses" element={<QuizzesAndCoursesPage />} />
          <Route path="/profile-settings" element={<ProfileSettingsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default SchoolDashboard;
