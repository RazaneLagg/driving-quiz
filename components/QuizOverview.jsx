import React from "react";
import { Link } from "react-router-dom";

function StartQuizButton() {
  return (
    <Link to="/page3">
      <button className="start-quiz-btn-bilel">Start Quiz</button>
    </Link>
  );
}

function QuizOverview() {
  return (
    <div className="quiz-overview-bilel">
      <h2 className="quiz-title-billel">Road Signs and Markings</h2>
      <p className="quiz-description-bilel">
        To assess the learner's knowledge of basic road signs, traffic laws, and safe driving practices.
      </p>
      <div className="tags-bilel">
        <span className="tag-bilel">practice</span>
        <span className="tag-bilel">beginner</span>
        <span className="tag-bilel">must enroll in school</span>
      </div>
      <div className="quiz-meta-bilel">
        <p>
          Created by <b>Ning Yizhuo</b>, <span className="school-name-bilel">Adlene Auto Ecole</span>
        </p>
        <p>⏱ 30 minutes &nbsp; | &nbsp; 20 questions</p>
      </div>
      <StartQuizButton />
    </div>
  );
}

export default QuizOverview;
