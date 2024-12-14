
import React, { useState } from 'react';
import '../styles/FAQSection.css'; 

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I enroll in a driving school through this website?',
      answer:
        "We've partnered with the best driving schools. Browse our list of available schools, click 'Enroll Now', and follow the instructions to complete your registration.",
    },
    {
      question: 'Are the quizzes based on real driving exams?',
      answer: 'Yes! Our quizzes are designed to simulate real driving tests, including questions on traffic laws, road signs, and safe driving practices, tailored to your local regulations.',
    },
    {
      question: 'Is this platform free to use?',
      answer: 'We offer free content. Free users can access basic quizzes, unlock advanced tests, detailed analytics, and exclusive resources.',
    },
    {
      question: "What if I don’t pass my driving test after using the platform?",
      answer: 'Our goal is to prepare you for success, but sometimes additional practice is needed. You can revisit our quizzes and take advantage of the resources until you feel confident to retake your test.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'If you need assistance, feel free to reach out to us via email at support@.com or use the contact form on our website.',
    },
  ];

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-question ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleDropdown(index)}
        >
          <div className="faq-content">
            <span className="faq-circle"></span>
            <p>{faq.question}</p>
          </div>
          <span className="faq-arrow">{activeIndex === index ? '\u2212' : '\u003e'}</span>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
