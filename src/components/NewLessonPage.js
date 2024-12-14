
import React, { useState } from 'react';
import '../styles/NewLessonPage.css'; 

const LessonsPage = () => {
  
  const [lessons, setLessons] = useState([]);

  
  const [formData, setFormData] = useState({
    title: '',
    number: '',
    description: '',
    link: '',
    duration: '',
    content: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setLessons([...lessons, { ...formData }]);
    
    setFormData({ title: '', number: '', description: '', link: '', duration: '', content: '' });
  };

  return (
    <div className="page-container-salah">
      
      <div className="lessons-list-salah">
        {lessons.map((lesson, index) => (
          <div className="lesson-item-salah" key={index}>
            <img src="./assets/images/book.png" alt="Lesson Icon" className="lesson-icon-salah" />
            <span>{`Lesson ${lesson.number}: ${lesson.title}`}</span>
          </div>
        ))}
      </div>

      
      <div className="lesson-form-salah">
        <h2>Create a new lesson</h2>
        <form className="form-group-salah" onSubmit={handleSubmit}>
          <div className="form-group-salah">
            <label>Lesson Title</label>
            <input
              type="text"
              name="title"
              placeholder="Lesson title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-salah">
            <label>Lesson Number</label>
            <input
              type="text"
              name="number"
              placeholder="Lesson number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-salah">
            <label>Lesson Description</label>
            <input
              name="description"
              placeholder="Lesson description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-salah">
            <label>Lesson Link</label>
            <input
              placeholder="Lesson link"
              type="text"
              name="link"
              value={formData.link}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-salah">
            <label>Duration</label>
            <input
              placeholder="Lesson duration"
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-salah">
            <label>Content</label>
            <textarea
              placeholder=" "
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Add Lesson</button>
        </form>
      </div>
    </div>
  );
};

export default LessonsPage;
