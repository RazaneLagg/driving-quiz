import React, { useState } from "react";

const CreateNewQuizForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [questions, setQuestions] = useState("");
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState("");
  const [type, setType] = useState("");

  const handleTagChange = (event) => {
    const value = event.target.value;
    setTags(value.split(","));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newQuiz = {
      title,
      description,
      time,
      questions,
      tags,
      image,
      type,
    };

    // Pass the new quiz data to the parent component via onSubmit
    onSubmit(newQuiz);

    // Clear form after submission
    setTitle("");
    setDescription("");
    setTime("");
    setQuestions("");
    setTags([]);
    setImage("");
    setType(""); // Also clear type
  };

  return (
    <form onSubmit={handleSubmit} className="create-quiz-form-khadija">
      <div className="form-group-khadija">
        <label htmlFor="title">Quiz Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group-khadija">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group-khadija">
        <label htmlFor="time">Time (in minutes)</label>
        <input
          type="number"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div className="form-group-khadija">
        <label htmlFor="questions">Number of Questions</label>
        <input
          type="number"
          id="questions"
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          required
        />
      </div>
      <div className="form-group-khadija">
        <label htmlFor="tags">Tags (separate by commas)</label>
        <input
          type="text"
          id="tags"
          value={tags.join(",")}
          onChange={handleTagChange}
          required
        />
      </div>
      <div className="form-group-khadija">
        <label htmlFor="type">Type</label>
        <input
          type="text"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </div>
     
      <button type="submit" className="btn-submit-khadija">
        Add Quiz
      </button>
    </form>
  );
};

export default CreateNewQuizForm;
