import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/WelcomeSection.css'; 

const WelcomeSection = () => {
    return (
        <section className="welcome-section" style={{ backgroundImage: `url("./assets/images/slide2.png")` }} >
            <div className="welcome-content">
                <h1>Learn <span>Driving</span> And <br/><span>TRAFFIC RULES</span><br/>That Make You a  <br/><span>Better Driver</span></h1>
                <p>Knowing how to drive a car is no longer a luxury, it's a necessity!</p>
                
                <Link to="/signup">
                    <button className="get-started-btn">Get Started</button>
                </Link>
            </div>
        </section>
    );
}

export default WelcomeSection;
