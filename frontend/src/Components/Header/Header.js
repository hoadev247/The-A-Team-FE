import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../Context/AuthContext"; // Import AuthContext
import "./Header.css";

export const Header = () => {
  const { auth } = useAuth(); // Lấy trạng thái auth từ AuthContext
  const [activeLink, setActiveLink] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleSearch = () => {
    console.log("Search for:", searchQuery);
  };

  const handleUserClick = () => {
    if (auth.token) {
      navigate("/profile"); // Điều hướng tới trang thông tin tài khoản
    } else {
      navigate("/login"); // Điều hướng tới trang đăng nhập
    }
  };

  return (
    <div className="header-container">
      {/* Logo và Search Bar */}
      <div className="logo-search-container">
        <div className="logo-header">
          <h1>MyLogo</h1>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="navbar-header-link">
        <div
          className={`navbar-header-home ${
            activeLink === "home" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("home")}
        >
          <Link to="/">Home</Link>
        </div>
        <div
          className={`navbar-header-about ${
            activeLink === "about" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("about")}
        >
          <Link to="/about">About</Link>
        </div>
        <div
          className={`navbar-header-contact ${
            activeLink === "contact" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("contact")}
        >
          <Link to="/contact">Contact</Link>
        </div>
        <div
          className={`navbar-header-news ${
            activeLink === "news" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("news")}
        >
          <Link to="/news">News</Link>
        </div>
      </div>

      {/* Cart and User Icon */}
      <div className="navbar-header-container3">
        {/* Cart Icon */}
        <div className="cart">
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          </Link>
        </div>

        {/* User Icon */}
        <div className="user-actions">
          {auth.token ? (
            <div className="user-icon" onClick={handleUserClick}>
              <FontAwesomeIcon icon={faUser} className="user-icon-style" />
            </div>
          ) : (
            <div className="user-icon" onClick={handleUserClick}>
              <FontAwesomeIcon icon={faUser} className="user-icon-style" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
