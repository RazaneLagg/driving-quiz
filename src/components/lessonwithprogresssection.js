import React from 'react';

import '../styles/MentorPublishedSection.css';
import LessonCardwithProgress from "./lessonwithprogresscard";
import learningData from "../data/MentorsLessons";
import quizData from "../data/MentorsQuizzes";
import Quizwithprogresscard from "./quizwithprogresscard";

const LessonsProgressSection = ({ type, showSeeAll, seeAllLink, cardsPerPage }) => {
  const renderSeeAll = () => {
    if (showSeeAll) {
      return <a href={seeAllLink} className="see-all-imane">See all</a>;
    }
    return null;
  };

  const dataToShow = type === 'lessons'
    ? learningData.slice(0, cardsPerPage)  
    : quizData.slice(0, cardsPerPage);    

  return (
    <div className="learning-section-imane">
      <div className="title-section-imane">
        <h2>{type === 'lessons' ? 'Resume learning' : 'Take quizzes'}</h2>
        {renderSeeAll()}
      </div>
      <div className="card-container-imane">
        {dataToShow.map((item) => (
          type === 'lessons'
            ? <LessonCardwithProgress
                key={item.id}
                title={item.title}
                image={item.image}
                progress={item.progress}
              />
            : <Quizwithprogresscard
                key={item.id}
                title={item.title}
                description={item.description}
                progress={item.progress}
                progressprs={item.progressprs}
                locked={item.locked}
                unlockMessage={item.unlockMessage}
              />
        ))}
      </div>
    </div>
  );
};

export default LessonsProgressSection;
