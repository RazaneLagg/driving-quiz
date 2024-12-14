import React from "react";
import "../styles/BenefitsSection.css";

const benefits = [
  {
    id: 1,
    title: "Tailored Quizzes",
    description: "Practice quizzes designed to match your local driving test patterns.",
  },
  {
    id: 2,
    title: "Affordable Plans",
    description: "Learning to drive shouldn't break the bank. Explore flexible and free pricing.",
  },
  {
    id: 3,
    title: "Expert Insights",
    description: "Access tips and guidance from experienced driving instructors.",
  },
  {
    id: 4,
    title: "Anytime, Anywhere",
    description: "Study on your schedule with mobile-friendly resources.",
  },
  {
    id: 5,
    title: "Improved Success Rates",
    description: "Our learners pass their driving exams with confidence, thanks to effective preparation.",
  },
  {
    id: 6,
    title: "Multimedia Learning",
    description: "Interactive videos, audio explanations, and visual aids for an engaging experience.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <h2 className="benefits-title">Our Benefits</h2>
      <p className="benefits-subtitle">
        By joining us, you get access to unmatched learning resources and support.
      </p>
      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="benefit-card">
            <div className="benefit-number">{`0${benefit.id}`}</div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
