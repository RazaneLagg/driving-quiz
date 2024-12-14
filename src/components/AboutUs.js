import React, { useEffect, useRef } from "react";
import "../styles/AboutUs.css";


const AboutUs = () => {
  const aboutTopRef = useRef(null);
  const aboutBottomRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      const topSection = aboutTopRef.current;
      const bottomSection = aboutBottomRef.current;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (topSection && scrollPosition > topSection.offsetTop + 100) {
        topSection.classList.add("visible");
      }
      if (bottomSection && scrollPosition > bottomSection.offsetTop + 100) {
        bottomSection.classList.add("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="about-us">
      
      <div className="about-top" ref={aboutTopRef}>
        <div className="text-section">
          <h1>About Us</h1>
          <h2>Unlock Your Road To Driving Success</h2>
          <p>
            We are a premier online platform offering interactive quizzes,
            practice tests, and valuable learning resources to help aspiring
            drivers ace their driving exams. Partnering with experienced
            instructors from top driving schools, we empower learners with the
            knowledge and confidence needed to excel on the road. Join Us Today
            and take the first step toward safe and confident driving!
          </p>
          
            
        </div>
        <div className="image-section">
          <img src="./assets/images/aboutus1.png"/>
          <img src="./assets/images/aboutus1.png" />
        </div>
      </div>

      
      <div className="about-bottom" ref={aboutBottomRef}>
        <div className="feature-image">
          <img src="./assets/images/aboutus1.png"alt="Driving Cars" />
        </div>
        <div className="feature-text">
          <h2>Features</h2>
          <h3>Learn Better, Drive Smarter</h3>
          <p>
            Our mission is to simplify your learning experience. We focus on
            creating fun, interactive, and effective study tools that match
            your pace and style. Start your journey with us today and drive your
            way to success!
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
