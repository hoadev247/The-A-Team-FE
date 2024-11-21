import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Router Link
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="email" className="email-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="password-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          Login
        </button>
      </form>

      {/* Additional Links */}
      <div className="additional-links">
        <Link to="/forgot-password" className="forgot-password-link">
          Forgot Password?
        </Link>
        <Link to="/register" className="register-link">
          Don't have an account? Register here.
        </Link>
        <Link to="/" className="home-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
