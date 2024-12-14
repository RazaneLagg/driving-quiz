import React from 'react';
import '../styles/MentorPublishedSection.css';
import LessonCard from "../components/LessonCard";
import QuizzCardIm from "./QuizCardIm";
import learningData from "../data/MentorsLessons";
import quizData from "../data/MentorsQuizzes";

const LessonMentorSection = ({ type, showSeeAll, seeAllLink, cardsPerPage }) => {

  const dataToShow = type === 'lessons'
    ? learningData.slice(0, cardsPerPage)  
    : quizData.slice(0, cardsPerPage);

  const renderSeeAll = () => {
    if (showSeeAll) {
      return (
        <a href={seeAllLink} className="see-all-imane">
          See all
        </a>
      );
    }
    return null;
  };

  if (type === 'lessons') {
    return (
      <div className="learning-section-imane">
        <div className="title-section-imane">
          <span className="title">Lessons</span>
          {renderSeeAll()}
        </div>
        <div className="card-container-imane row">
          {dataToShow.map((item) => (
            <LessonCard
              key={item.id}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="learning-section-imane">
        <div className="title-section-imane">
          <span className="title-imane">Quizzes</span>
          {renderSeeAll()}
        </div>
        <div className="card-container-imane">
          {dataToShow.map((quiz) => (
            <QuizzCardIm
              key={quiz.id}
              title={quiz.title}
              description={quiz.description}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default LessonMentorSection;
