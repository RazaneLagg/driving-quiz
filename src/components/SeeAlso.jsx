import React from "react";
import QuizCard from "./QuizCard";
import { quizzes } from "../data/quizzes"; 

function SeeAlso() {
  return (
    <section className="see-also">
      <h3>See Also</h3>
      <div className="quiz-cards-bilel">
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </section>
  );
}

export default SeeAlso;
