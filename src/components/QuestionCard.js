import React from "react";
import { Link } from "react-router-dom";

const QuestionCard = ({ question }) => {
  return (
    <Link to={`/QuestionDetails/${question.id}`} className="question-card-link-khadija">
      <div className="question-card-container-khadija">
        <div className="question-details-container-khadija">
          <h2>Question {question.id}</h2>
          <p>{question.text}</p>
          <div className="question-options-container-khadija">
            {question.options.map((option, index) => (
              <p key={index} className="option-item-khadija">
                {index + 1}. {option}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuestionCard;
