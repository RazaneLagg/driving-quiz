import { Link } from "react-router-dom"; 
import React from "react";
import QuizOverview from "../components/QuizOverview.jsx";
import SeeAlso from "../components/SeeAlso.jsx";
import '../styles/style2.css'; 



const Page2 = () => {
  return (
    <div>
    
      <div className="container_page2-bilel">
        <QuizOverview />
        <SeeAlso />
        
      </div>
    </div>
  );
}

export default Page2;
