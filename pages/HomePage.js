import React from "react";
import WelcomeSection from '../components/WelcomeSection';
import ServiceSection from '../components/ServiceSection';
import CourseSection from '../components/CourseSection';
import MentorSection from '../components/MentorSection';
import SchoolSection from '../components/SchoolSection';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import BenefitsSection from '../components/BenefitsSection';
import FAQSection from '../components/FAQSection';
import HomeNavbar from '../components/homenavbar';
import ScrollUpButton from '../components/ScrollUpButton';

const HomePage = () => {
  return (
    <div>
      <HomeNavbar />
      <div id="welcome-section"><WelcomeSection /></div>
      <div id="service-section"><ServiceSection /></div>
      <div id="course-section"><CourseSection /></div>
      <div id="mentor-section"><MentorSection /></div>
      <div id="school-section"><SchoolSection /></div>
      <div id="aboutus-section"><AboutUs /></div>
      <div id="benefits-section"><BenefitsSection /></div>
      <div id="faq-section"><FAQSection /></div>
      <div id="contactus-section"><ContactUs /></div>
      
      <ScrollUpButton />
    </div>
  );
};

export default HomePage;
