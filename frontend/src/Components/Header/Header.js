import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Đăng nhập
  const [cartItems, setCartItems] = useState(0); // Giỏ hàng

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleSearch = () => {
    console.log("Search for:", searchQuery);
  };

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="Header">
      <div className="navbar-header-container1">
        <div className="navbar-header-category"></div>
      </div>

      <div className="navbar-header-container2">
        <div className="logo-header">
          <h1>MyLogo</h1>
        </div>

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

      <div className="navbar-header-container3">
        {/* Search Bar */}

        {/* Login/Register / Logout */}
        <div className="auth-buttons">
          {!isLoggedIn ? (
            <>
              <Link to="/login">Login</Link>
              <div class="vertical-line"></div>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <button onClick={handleLoginLogout}>Logout</button>
          )}
        </div>

        {/* Cart */}
        <div className="cart">
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
