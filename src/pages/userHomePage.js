import React from 'react';  
import '../styles/userHomePage.css';
import Introduction from '../components/Introduction';

import LessonsProgressSection from "../components/LessonsProgressSection";

function userHomePage() {
  return (
    <div className="App">
      <Introduction />
      <LessonsProgressSection type="lessons" />
      <LessonsProgressSection type="quizzes" />
    </div>
  );
}

export default userHomePage;
