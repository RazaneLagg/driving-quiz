// QuestionForm.js
import React, { useState } from "react";

const CreateNewQuestionForm = ({ onSubmit }) => {
  const [text, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [explanation, setExplanation] = useState("");

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newQuestion = {
        text,
      options,
      correctAnswer,
      explanation,
    };

    // Pass the new question data to the parent component via onSubmit
    onSubmit(newQuestion);

    // Clear form after submission
    setQuestionText("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");
    setExplanation("");
  };

  return (
    <form onSubmit={handleSubmit} className="create-question-form-khadija">
      <div className="form-group-khadija">
        <label htmlFor="text">Question</label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setQuestionText(e.target.value)}
          required
        />
      </div>
      {options.map((option, index) => (
        <div key={index} className="form-group-khadija">
          <label htmlFor={`option-${index}`}>Option {index + 1}</label>
          <input
            type="text"
            id={`option-${index}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            required
          />
        </div>
      ))}
      <div className="form-group-khadija">
        <label htmlFor="correctAnswer">Correct Answer</label>
        <input
          type="text"
          id="correctAnswer"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          required
        />
      </div>
      <div className="form-group-khadija">
        <label htmlFor="explanation">Explanation (Optional)</label>
        <textarea
          id="explanation"
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
        />
      </div>
      <button type="submit" className="btn-submit-khadija">
        Add Question
      </button>
    </form>
  );
};

export default CreateNewQuestionForm;