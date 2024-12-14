import React from "react";
import "../styles/QuizzprogressCard.css";
import { Link } from 'react-router-dom';

const QuizzProgressCard = ({ title, description, progress,progressprs, locked, unlockMessage }) => {
  return (
    <div className={`quiz-card`}>
      <div className="quiz-details">
        <p className="quiz-card-title">{title}</p>
        <p className="quiz-card-description">{description}</p>
      </div>


      <div className="point-user-to-quizz">
        <div>
          <img src='./assets/images/Icon.png' className="quiz-start-logo" />
        </div>
        <Link to='/page2' className="take-quiz">take quizz</Link>
      </div>


      
    </div>
  );
};

export default QuizzProgressCard;
