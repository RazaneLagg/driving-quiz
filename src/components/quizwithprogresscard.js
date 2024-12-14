import React from "react";
import "../styles/quizzcardwprogress.css";
import { Link } from 'react-router-dom';

const Quizwithprogresscard = ({ title, description, progress, progressprs, locked, unlockMessage }) => {
  return (
    <div className={`quiz-card-imane ${locked ? 'locked' : ''}`}>
      <div className="quiz-details-imane">
        <p className="quiz-card-title-imane">{title}</p>
        <p className="quiz-card-description-imane">{description}</p>
      </div>

      {locked ? (
        <div className="locked-message-imane">
          <p>{unlockMessage}</p>
        </div>
      ) : (
        <Link to="/review" className="point-user-to-quizz-imane">
          <div>
            <img src="/assets/images/officer.png" className="quiz-start-logo-imane" alt="Quiz Start" />
          </div>
          <p className="take-quiz-imane">Take Quiz</p>
        </Link>
      )}
    </div>
  );
};

export default Quizwithprogresscard;
