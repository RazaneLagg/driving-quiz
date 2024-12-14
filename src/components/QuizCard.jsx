import React from "react";
import { Link } from "react-router-dom"; 

const QuizCard = ({ quiz }) => {
  return (
    <Link to="/page2" className="quiz-card-link"> 
      <div className="quiz-card-bilel">
        <img src={quiz.image} alt={quiz.title} />
        <div className="quiz-details-bilel">
          <h2>{quiz.title}</h2>
          <div className="tags-bilel">
            {quiz.tags.map((tag, index) => (
              <span key={index} className={`tag-bilel ${tag}`}>
                {tag}
              </span>
            ))}
          </div>
          <p>{quiz.description}</p>
          <div className="quiz-info-bilel">
            <span>{quiz.time}</span>
            <span>{quiz.type}</span>
            <span>{quiz.questions}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;
