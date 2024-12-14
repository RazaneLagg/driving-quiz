import React from 'react';
import '../styles/LessonsProgressSection.css';
import LessonCardProgress from "./LessonCardProgress";
import QuizzProgressCard from "./QuizzProgressCard";
import learningData from "../data/data";
import { Link } from 'react-router-dom';
import quizData from "../data/quizData";

const LessonsProgressSection = ({ type }) => { 
   
        if (type == 'lessons') {
            return( 
                 <div className="learning-section">
                <div className="section-header">
                  <h2>{type === 'lessons' ? 'continue learning' : 'take quizzes'}</h2>
                  <Link to="/lessonspage" className="see-all">See all</Link>
                </div>
                <div className="card-container">
                  {learningData.map((item) => (
                    <LessonCardProgress
                      key={item.id}
                      title={item.title}
                      image={item.image}
                      progress={item.progress}
                    />
                  ))}
                </div>
              </div>)
        }
        else{
            return(
                <div className="learning-section">
                <div className="section-header">
                  <h2>{type === 'lessons' ? 'continue learning' : 'take quizzes'}</h2>
                  <a href="#see-all" className="see-all">See all</a>
                </div>
                <div className="card-container">
                  {quizData.map((quiz) => (
                    <QuizzProgressCard
                      key={quiz.id}
                      title={quiz.title}
                      description={quiz.description}
                      
                    />
                  ))}
                </div>
              </div>
            )
        }
    
    
  };
  

export default LessonsProgressSection;
