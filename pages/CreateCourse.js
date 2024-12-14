import React from "react";
import "../styles/CreateCourse.css";
import { Link } from "react-router-dom";

const CreateCourse = () => {
  return (
    <div className="create-course-page-salah">
      <div className="create-course-card-salah">
        <h1 className="title-salah">Create New Course</h1>
        <p className="subtitle-salah">Provide the necessary details to launch your course.</p>

        <form className="create-course-form-salah">
          <div className="form-section-salah left-salah">
            <div className="form-group-salah">
              <label>Course Title</label>
              <input type="text" placeholder="Course Title" />
            </div>
            <div className="form-group-salah">
              <label>Course Description</label>
              <textarea placeholder="Course Description"></textarea>
            </div>
            <div className="form-group-salah">
              <label>Target Audience</label>
              <input type="text" placeholder="Target Audience" />
            </div>
            <div className="form-group-salah">
              <label>Duration</label>
              <input type="text" placeholder="Duration" />
            </div>
          </div>

          <div className="form-section-salah right-salah">
            <div className="form-group-salah">
              <label>Course Type</label>
              <select>
                <option value="beginner">Beginner</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div className="form-group-salah">
              <label>Course Image</label>
              <input type="file" accept="image/*" />
            </div>
          </div>
        </form>

        <div className="next-button-container-salah">
          <Link to="/MentorCourses">
            <button className="next-btn-salah">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;