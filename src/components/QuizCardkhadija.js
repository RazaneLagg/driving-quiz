import React from "react";
import { Link } from "react-router-dom"; 

const QuizCardMentor = ({ quiz }) => {
  return (
    <Link to="/QuizMentorView" className="quiz-card-link"> 
      <div className="quiz-card-khadija">
        <img src={quiz.image || "/assets/images/quizback.jpg"} alt={quiz.title} />
        <div className="quiz-details-khadija">
          <h2>{quiz.title}</h2>
          <div className="tags-khadija">
            {quiz.tags.map((tag, index) => (
              <span key={index} className={`tag-khadija ${tag}`}>
                {tag}
              </span>
            ))}
          </div>
          <p>{quiz.description}</p>
          <div className="quiz-info-khadija">
            <span>{quiz.time}  minutes</span>
            <span>{quiz.type}</span>
            <span>{quiz.questions} questions </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuizCardMentor;
