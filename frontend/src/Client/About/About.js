import React from "react";
import Header from "../../Components/Header/Header";
import "./About.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-container">
        <h1>About Us</h1>
        <section className="about-section">
          <div className="about-content">
            <h2>Our Mission</h2>
            <p>
              We are committed to providing high-quality products and services
              to our customers. Our mission is to create a seamless and
              enjoyable shopping experience for all.
            </p>
          </div>
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, our company has grown rapidly and gained a strong
              reputation in the industry. What started as a small team with big
              ideas has now turned into a trusted name in the market.
            </p>
          </div>
          <div className="about-content">
            <h2>Our Team</h2>
            <p>
              Our team is a group of passionate and dedicated professionals,
              working together to bring the best to our customers. We believe in
              innovation, creativity, and teamwork.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
