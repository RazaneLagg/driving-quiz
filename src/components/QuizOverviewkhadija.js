import React from "react";
import { Link } from "react-router-dom";

function StartQuizButton() {
  return (
    <Link to="/CreateNewQuestion">
      <button className="start-quiz-btn-khadija">Start Adding Questions</button>
    </Link>
  );
}

function QuizOverview() {
  return (
    <div className="quiz-overview-khadija">
      <h2 className="quiz-title-khadija">Road Safety Rules</h2>
      <p className="quiz-description-khadija">
        To assess the learner's knowledge of basic road signs, traffic laws, and safe driving practices.
      </p>
      <div className="tags-khadija">
        <span className="tag-khadija">practice</span>
        <span className="tag-khadija">beginner</span>
        <span className="tag-khadija">must enroll in school</span>
      </div>
      <div className="quiz-meta-khadija">
        <p>
          Created by <b>Ning Yizhuo</b>, <span className="school-name-khadija">Adlene Auto Ecole</span>
        </p>
        <p>⏱ 30 minutes &nbsp; | &nbsp; 20 questions</p>
      </div>
      <StartQuizButton />
    </div>
  );
}

export default QuizOverview;
