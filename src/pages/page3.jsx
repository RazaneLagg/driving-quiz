import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import questions from '../data/questions.js';
import '../styles/style3.css';

const Page3 = () => {
  const [timerDuration, setTimerDuration] = useState(60);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    if (showFeedback) return;

    const timerInterval = setInterval(() => {
      if (timerDuration <= 0) {
        clearInterval(timerInterval);
        setShowModal(true); 
      } else {
        setTimerDuration(prev => prev - 1);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timerDuration, showFeedback]);

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleNext = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (!selectedAnswer) return;

    const answerIsCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const selectedAnswerText = currentQuestion.options[selectedAnswer.charCodeAt(0) - 65];

    setIsCorrect(answerIsCorrect);

    setUserAnswers(prev => [
      ...prev,
      {
        question: currentQuestion.text,
        selectedAnswer: selectedAnswerText,
        correctAnswer: currentQuestion.options[currentQuestion.correctAnswer.charCodeAt(0) - 65],
        isCorrect: answerIsCorrect,
      },
    ]);

    if (answerIsCorrect) {
      setCorrectCount(prev => prev + 1);
      setTimeout(() => {
        moveToNextQuestion();
      }, 1500);
    } else {
      setWrongCount(prev => prev + 1);
    }

    setShowFeedback(true);
  };

  const moveToNextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    setIsCorrect(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      navigate("/review", { state: { userAnswers } });
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/review", { state: { userAnswers } });
  };

  const updateQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <div className="question-container-bilel">
        <p id="question-title-bilel">{currentQuestion.title}</p>
        <h2 id="question-text-bilel">{currentQuestion.text}</h2>
        <form className='quiz-bilel-form' id="options-bilel">
          {currentQuestion.options.map((option, index) => {
            const optionValue = String.fromCharCode(65 + index);
            const isOptionCorrect = currentQuestion.correctAnswer === optionValue;
            const isSelected = selectedAnswer === optionValue;

            return (
              <label
                key={index}
                className={`option-label-bilel ${
                  showFeedback
                    ? isOptionCorrect
                      ? 'correct'
                      : isSelected
                      ? 'incorrect'
                      : ''
                    : ''
                }`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={optionValue}
                  checked={selectedAnswer === optionValue}
                  disabled={showFeedback}
                  onChange={handleAnswerChange}
                />
                {option}
              </label>
            );
          })}
        </form>
        {showFeedback && !isCorrect && (
          <div className="correct-answer-bilel">
            Correct answer: {currentQuestion.options[currentQuestion.correctAnswer.charCodeAt(0) - 65]}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="quiz-container-bilel">
        <h1 className="quiz-title-bilel">Road Signs and Markings</h1>
        <div className="progress-bar-bilel">
          <div
            className="progress-bilel"
            style={{
              width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
        <div className="stats-bilel">
          <span>remaining :  <b id="remaining-bilel">{questions.length - currentQuestionIndex}</b></span>
          <span>correct : <b id="correct-bilel">{correctCount}</b></span>
          <span>wrong : <b id="wrong-bilel">{wrongCount}</b></span>
          <span>score : <b id="score-bilel">{correctCount}/{questions.length}</b></span>
          <span className="timer-bilel">timer : <b id="timer-bilel">{Math.floor(timerDuration / 60)}:{(timerDuration % 60).toString().padStart(2, '0')}</b></span>
        </div>

        {updateQuestion()}

        <div className="navigation-bilel">
          <button
            id="next-bilel"
            onClick={handleNext}
            disabled={showFeedback || !selectedAnswer}
          >
            Submit
          </button>
          {showFeedback && !isCorrect && (
            <button id="next-question" onClick={moveToNextQuestion}>
              Next Question
            </button>
          )}
        </div>
      </div>

  
      {showModal && (
        <div className="modal-overlay-bilel">
          <div className="modal-bilel">
            <h2>Time's Up!</h2>
            <p>Your quiz has ended. Would you like to review your answers?</p>
            <button onClick={handleModalClose}>Review Answers</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Page3;
