import React from 'react';
import { useLocation, Link } from "react-router-dom";
import '../styles/review.css';

const ResultsPage = () => {
  const location = useLocation();
  const { userAnswers = [] } = location.state || {};

  console.log('User Answers:', userAnswers);


  const defaultAnswers = [
    {
      question: "What is the minimum legal age to obtain a driver's license?",
      selectedAnswer: "18",
      correctAnswer: "18",
      isCorrect: true,
    },
    {
      question: "What does a red traffic light indicate?",
      selectedAnswer: "Stop",
      correctAnswer: "Stop",
      isCorrect: true,
    },
    {
      question: "What should you do when approaching a pedestrian crossing?",
      selectedAnswer: "Accelerate",
      correctAnswer: "Slow down or stop",
      isCorrect: false,
    },
    {
      question: "What does the 'STOP' road sign mean?",
      selectedAnswer: "Yield to traffic",
      correctAnswer: "Come to a complete stop",
      isCorrect: false,
    },
    {
      question: "What is the legal blood alcohol limit for drivers in most countries?",
      selectedAnswer: "0.08%",
      correctAnswer: "0.08%",
      isCorrect: true,
    },
  ];
  

  const displayAnswers = userAnswers.length >0 ? userAnswers : defaultAnswers;

  const totalQuestions = displayAnswers.length;
  const correctAnswers = displayAnswers.filter(answer => answer.isCorrect).length;
  const scorePercentage = totalQuestions > 0 
    ? Math.round((correctAnswers / totalQuestions) * 100) 
    : 0;

  return (
    <div className="results-container">
      <h1 className="results-title">Quiz Results</h1>

      <div className="score-percentage">
        <h2>Your Score: {scorePercentage}%</h2>
        <p>
          You answered {correctAnswers} out of {totalQuestions} questions correctly.
        </p>
      </div>

      <div className="results-card">
        {displayAnswers.map((answer, index) => (
          <div key={index} className="question-card">
            <h2 className="question-title">Question {index + 1}</h2>
            <p className="question-text">{answer.question || "No question provided"}</p>
            
            <div className={`answer ${answer.isCorrect ? 'correct' : 'incorrect'}`}>
              <p>
                <strong>Your Answer:</strong> {answer.selectedAnswer || "No answer selected"}
              </p>
              {!answer.isCorrect && (
                <p>
                  <strong>Correct Answer:</strong> {answer.correctAnswer || "No correct answer provided"}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="navigation-buttons">
        <Link to="/StudentHome" className="nav-button">Go Back Home</Link>
      </div>
    </div>
  );
};

export default ResultsPage;
