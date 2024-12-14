import React from "react";
import "../styles/quizzcardwprogress.css";
import { Link } from "react-router-dom";

const QuizzCardIm = ({ title, description }) => {
  return (
    
    <Link to='/page2' className={`quiz-card-imane`}>
      <div className="quiz-details-imane">
        <p className="quiz-card-title-imane">{title}</p>
        <p className="quiz-card-description-imane">{description}</p>
      </div>

    </Link>
  );
};

export default QuizzCardIm;
