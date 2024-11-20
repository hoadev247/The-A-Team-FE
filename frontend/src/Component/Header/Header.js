import React from "react";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>MyLogo</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </header>
  );
};

export default Header;