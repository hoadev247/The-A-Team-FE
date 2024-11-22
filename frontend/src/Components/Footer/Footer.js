import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const sections = [
    {
      title: "Store",
      links: [
        { to: "/men", label: "Men" },
        { to: "/women", label: "Women" },
        { to: "/children", label: "Children" },
        { to: "/new-arrivals", label: "New Arrivals" },
        { to: "/top-brands", label: "Top Brands" },
        { to: "/special-offers", label: "Special Offers" },
      ],
    },
    {
      title: "About Us",
      links: [
        { to: "/about", label: "About Us" },
        { to: "/clients", label: "Clients" },
        { to: "/services", label: "Services" },
        { to: "/best-sellers", label: "Best Sellers" },
        { to: "/blog", label: "Blog" },
        { to: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { to: "/terms", label: "Terms & Conditions" },
        { to: "/privacy", label: "Privacy Policy" },
        { to: "/legality", label: "Legality" },
        { to: "/author-license", label: "Author License" },
      ],
    },
  ];

  return (
    <div className="footer">
      <div className="footer-content">
        {sections.map((section, idx) => (
          <div key={idx} className="footer-section">
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-section subscribe">
          <h3>Subscribe</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <input
            className="subscribe-input"
            type="email"
            placeholder="Enter your email"
          />
          <button>Send</button>
        </div>

        <div className="footer-section social">
          <h3 className="h3_us">Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
