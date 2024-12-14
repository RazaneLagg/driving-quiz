import React from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <section id="contact-us">
      
      <div className="contact-title">Contact Us</div>

      <div className="contact-card">
        
        <div className="contact-left">
          <h2>Leave us a message</h2>
          <form id="contact-form">
            <input type="text" name="name" placeholder="Name" required />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>

        
        <div className="contact-right">
          <h3>Sidi Abdellah</h3>
          <p>Mahelma ENSIA</p>
          <p>+213 770125631</p>
          <p>coucou@info.cc.cc</p>
          <img
            src="https://via.placeholder.com/400x200?text=Map+Placeholder"
            alt="Map placeholder"
            className="map-placeholder"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
