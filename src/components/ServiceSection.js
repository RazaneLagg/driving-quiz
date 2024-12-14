import React from 'react';
import '../styles/ServiceSection.css'; 

function ServiceSection() {
  return (
    <section className="services-section">
      <h4>Our Services</h4>
      <p>Now discover how good a driver you are!</p>
      <div className="services-container">
        <div className="service-box">
          <div className="service-box-header">
            <img src="./assets/images/Frame 391.png" alt="Happy Students Icon" />
            <h3>HAPPY STUDENTS</h3>
          </div>
          <p>We have successfully transformed beginners into skilled and confident drivers.</p>
        </div>

        <div className="service-box">
          <div className="service-box-header">
            <img src="./assets/images/Frame 391.png" alt="Expert Trainers Icon" />
            <h3>EXPERT TRAINERS</h3>
          </div>
          <p>Get driving training from our team of driving professionals that has expert male and female trainers.</p>
        </div>

        <div className="service-box">
          <div className="service-box-header">
            <img src="./assets/images/Frame 391.png" alt="Training Schools Icon" />
            <h3>TRAINING SCHOOLS</h3>
          </div>
          <p>We have made quality driving training accessible with our widespread network of Training Schools covering many cities.</p>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
