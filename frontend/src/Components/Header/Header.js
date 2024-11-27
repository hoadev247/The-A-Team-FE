import React, { useState, useEffect } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

// Header component
export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if menu is open
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const navigate = useNavigate(); // Điều hướng

  // Kiểm tra trạng thái đăng nhập từ localStorage khi component được render
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    console.log("Login status from localStorage:", loggedInStatus);

    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // Toggle menu visibility
  const toggleMenu = () => {
    console.log("Menu toggled");
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };
  useEffect(() => {
    console.log("isMenuOpen:", isMenuOpen);
  }, [isMenuOpen]);

  // Hàm tìm kiếm
  const handleSearch = () => {
    console.log("Search for:", searchQuery);
  };

  // Hàm xử lý khi người dùng click vào icon người dùng
  const handleUserClick = () => {
    console.log("Is Logged In:", isLoggedIn);
    if (isLoggedIn) {
      navigate("/profile"); // Nếu đã đăng nhập, điều hướng tới trang thông tin cá nhân
    } else {
      navigate("/login"); // Nếu chưa đăng nhập, điều hướng tới trang đăng nhập
    }
  };

  return (
    <div className="header-container">
      {/* Logo and Search */}
      <div className="logo-search-container">
        <div
          className={`logo-header ${isMenuOpen ? "x-logo" : ""}`}
          onClick={toggleMenu} // Toggle the menu on logo click
        >
          {isMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <h1>MyLogo</h1>}
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

      {/* Hamburger Icon to toggle the menu */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Navigation Menu */}
      <div className={`navbar-header-link ${isMenuOpen ? "show-menu" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navbar-header-home active" : "navbar-header-home"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "navbar-header-about active" : "navbar-header-about"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "navbar-header-contact active" : "navbar-header-contact"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? "navbar-header-news active" : "navbar-header-news"
          }
        >
          News
        </NavLink>
      </div>

      {/* Auth and Cart */}
      <div className="navbar-header-container3">
        {/* Cart Icon */}
        <div className="cart">
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          </Link>
        </div>

        {/* User Icon */}
        <div className="user-icon" onClick={handleUserClick}>
          <FontAwesomeIcon icon={faUser} className="user-icon-style" />
        </div>
      </div>
    </div>
  );
};

export default Header; // Only export Header as default
