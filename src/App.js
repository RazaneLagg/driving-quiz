import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LessonProfile from './pages/LessonProfile.jsx';
import SchoolProfile from './pages/SchoolProfile.jsx';
import MentorProfile from './pages/MentorProfile.jsx';
import ProgressPage from './pages/progressPage.jsx';
import LessonsPage from './pages/LessonsPage.jsx';
import Reviewpage from "./pages/reviewpage";
import LessonPage from "./pages/LessonPage";
import Login from './pages/Auth/login';
import CreateAccount from './pages/Auth/signup';
import UserHomePage from './pages/userHomePage';
import './styles/global.css';
import SettingsPage from './pages/SettingsPage';
import MainPage from "./pages/mainpage";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Footer from './components/Footer';
import NavBar from './components/NavBar.js';
import Searchpage from "./pages/searchpage";
import SchoolDashboard from './pages/School';
import AdminDashboard from './pages/Admin';
import HomePage from './pages/HomePage';
import UserFirstHomePage from "./pages/UserFirstHomePage";
import StudentProfile from './pages/StudentProfileOv';
import ResetPassword from './pages/Auth/ResetPassword';
import QuizesMentorView from './pages/QuizesMentorView';
import CreateNewQuiz from './pages/CreateNewQuiz';
import QuizMentorView from './pages/QuizMentorView';
import CreateNewQuestion from './pages/CreateNewQuestion';
import TestQuizMentorView from './pages/TestQuizMentorView';
import MentorNavBar from './components/MentorNavBar';
import ReviewAnswers from './pages/ReviewAnswers';


import LessonProfileDash from './pages/lessonProfileDash.js';
import QuizProfileDash from './pages/QuizProfileDash.js';
import MentorProfileDash from './pages/MentorProfileDash.js';
import SchoolProfileDash from './pages/SchoolProfileDash.js';


import MentorCourses from './pages/MentorCourses';
import CreateCourse from './pages/CreateCourse';
import CourseProfile from './pages/CourseProfile';
import EditProfile from './pages/EditProfile';
import ProfilePage from './pages/ProfilePage';
import MentorHomePage from './pages/MentorHomePage';
import MentorSearchPage from './pages/MentorSearchPage';

function App() {
  const location = useLocation();
  const shouldRenderNavBar = !['/home', '/login', '/signup', '/QuizesMentorView',
    '/CreateNewQuiz',
    '/QuizMentorView',
    '/CreateNewQuestion',
    '/TestQuizMentorView',
    '/ReviewAnswers',
    '/MentorCourses',
    '/CreateCourse',
    '/CourseProfile',
    '/EditProfile',
    '/ProfilePage',
    '/MentorHomePage',
    '/MentorSearchPage',
    "/LessonProfileDash",
    "/QuizProfileDash",
    "/MentorProfileDash",
    "/SchoolProfileDash",
    '/StudentProfileOv' ].includes(location.pathname);
  const shouldRenderFooter = !['/login', '/signup', '/ResetPassword', '/settings', '/StudentProfileOv', "/admindashboard/*", "/dashboard/*",  "/LessonProfileDash",
    "/QuizProfileDash",
    "/MentorProfileDash",
    "/SchoolProfileDash"].includes(location.pathname);
  const mentorPages = [
    '/QuizesMentorView',
    '/CreateNewQuiz',
    '/QuizMentorView',
    '/CreateNewQuestion',
    '/TestQuizMentorView',
    '/ReviewAnswers',
    '/MentorCourses',
    '/CreateCourse',
    '/CourseProfile',
    '/EditProfile',
    '/ProfilePage',
    '/MentorHomePage',
    '/MentorSearchPage',
  ];
  const shouldRenderMentorNavBar = mentorPages.includes(location.pathname);
  const [hasJoinedSchool, setHasJoinedSchool] = useState(false);

  const handleJoinSchool = () => {
    setHasJoinedSchool(true);
  };

  return (
    <div className="app">
      {shouldRenderNavBar && <NavBar type={"settings"} hasJoinedSchool={hasJoinedSchool} />}
      {shouldRenderMentorNavBar && <MentorNavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard/*" element={<SchoolDashboard />} />
        <Route path="/admindashboard/*" element={<AdminDashboard />} />

        <Route path="/LessonProfileDash" element={<LessonProfileDash />} />
        <Route path="/QuizProfileDash" element={<QuizProfileDash />} />
        <Route path="/MentorProfileDash" element={<MentorProfileDash />} />
        <Route path="/SchoolProfileDash" element={<SchoolProfileDash />} />




        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/lessonprofile" element={<LessonProfile />} />
        <Route path="/schoolprofile" element={<SchoolProfile onJoinSchool={handleJoinSchool} />} />
        <Route path="/mentorprofile" element={<MentorProfile />} />
        <Route path="/progresspage" element={<ProgressPage />} />
        <Route path="/lessonspage" element={<LessonsPage />} />
        <Route path="/review" element={<Reviewpage />} />
        <Route path="/lesson" element={<LessonPage />} />
        <Route path="/StudentHome" element={<UserHomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/studentprofileschoolview" element={<StudentProfile />} />
        <Route path="/searchp" element={<Searchpage />} />
        <Route path="/UserFirstHomePage" element={<UserFirstHomePage />} />
        <Route path="/StudentProfileOv" element={<StudentProfile />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/QuizesMentorView" element={<QuizesMentorView />} />
        <Route path="/CreateNewQuiz" element={<CreateNewQuiz />} />
        <Route path="/QuizMentorView" element={<QuizMentorView />} />
        <Route path="/CreateNewQuestion" element={<CreateNewQuestion />} />
        <Route path="/TestQuizMentorView" element={<TestQuizMentorView />} />
        <Route path="/ReviewAnswers" element={<ReviewAnswers />} />
        <Route path="/MentorCourses" element={<MentorCourses />} />
        <Route path="/CreateCourse" element={<CreateCourse />} />
        <Route path="/CourseProfile" element={<CourseProfile />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/MentorHomePage" element={<MentorHomePage />} />
        <Route path="/MentorSearchPage" element={<MentorSearchPage />} />
      </Routes>
      {shouldRenderFooter && <Footer />}
    </div>
  );
}

export default App;
