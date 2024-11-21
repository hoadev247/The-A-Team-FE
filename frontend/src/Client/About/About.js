import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./About.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-container">
        {/* Background image with overlay text */}
        <div className="about-banner">
          <h1 className="about-title">About Us</h1>
        </div>

        <section className="about-section">
          <h2>Our Mission</h2>

          <div className="about-content">
            <img src="https://uploads.nhanhoa.com/attach/1691119599_website-gioi-thieu-cong-ty.png"></img>
            <p>
              We are committed to providing high-quality products and services
              to our customers. Our mission is to create a seamless and
              enjoyable shopping experience for all. We are committed to
              providing high-quality products and services to our customers. Our
              mission is to create a seamless and enjoyable shopping experience
              for all. We are committed to providing high-quality products and
              services to our customers. Our mission is to create a seamless and
              enjoyable shopping experience for all.
            </p>
          </div>
          <h2>Our Story</h2>
          <div className="about-content">
            <p>
              Founded in 2020, our company has grown rapidly and gained a strong
              reputation in the industry. What started as a small team with big
              ideas has now turned into a trusted name in the market.
            </p>
            <img src="https://uploads.nhanhoa.com/attach/1691119599_website-gioi-thieu-cong-ty.png"></img>
          </div>
          <h2>Our Team</h2>
          <div className="about-content">
            <img src="https://uploads.nhanhoa.com/attach/1691119599_website-gioi-thieu-cong-ty.png"></img>
            <p>
              Our team is a group of passionate and dedicated professionals,
              working together to bring the best to our customers. We believe in
              innovation, creativity, and teamwork.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
