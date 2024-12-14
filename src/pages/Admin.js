import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AdminDashNavbar from '../components/admindashnavbar';
import MentorsPage from './AdminDashboard/mentorsPage';
import StatisticsPage from './AdminDashboard/statisticsPage';
import StudentsPage from './AdminDashboard/studentsPage';
import SchoolsPage from './AdminDashboard/schoolsPage';
import ProfileSettingsPage from './AdminDashboard/profileSettingsPage';

const AdminDashboard = () => {
  return (
    <div>
      <AdminDashNavbar />
      <div className="content">
        <Routes>
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="students" element={<StudentsPage />} />
          <Route path="mentors" element={<MentorsPage />} />
          <Route path="schools" element={<SchoolsPage />} />
          <Route path="settings" element={<ProfileSettingsPage />} />

          <Route path="*" element={<Navigate to="statistics" />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
