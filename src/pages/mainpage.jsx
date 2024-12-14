import React, { useState } from "react";
import { Link } from "react-router-dom";  
import Filters from "../components/Filters";
import QuizCard from "../components/QuizCard";
import { quizzes } from "../data/quizzes";
import "../styles/main.css";

const MainPage = () => {
  const [filteredQuizzes, setFilteredQuizzes] = useState(quizzes);

  const handleFilterSelect = (filter) => {
    if (filter === "latest") {
      setFilteredQuizzes(quizzes);
    } else {
      setFilteredQuizzes(
        quizzes.filter((quiz) => quiz.tags.includes(filter))
      );
    }
  };

  return (
    <div>
      
      <div className="container_main-bilel">
        <h1 className="page-title-bilel">Quizzes</h1>
        <Filters onFilterSelect={handleFilterSelect} />
        <main>
          {filteredQuizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </main>
        
        
      </div>
      
    </div>
  );
};

export default MainPage;
