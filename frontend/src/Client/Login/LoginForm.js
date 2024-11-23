import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import AuthContext from "../../Context/AuthContext";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const API_URL = "http://localhost:5024/api/auth";

  const loginRequest = async (email, password) => {
    try {
      console.log("Sending login request...");

      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please try again.");
      }

      const data = await response.json();
      console.log("Response data:", data);

      const { token } = data;

      if (token) {
        console.log("Received token:", token);

        const decodedToken = jwtDecode(token);
        console.log("Decoded token:", decodedToken);

        // Truy cập role qua key đầy đủ
        const userRole =
          decodedToken[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ];
        console.log("User role:", userRole);

        if (!userRole) {
          throw new Error("User role is not defined in the token");
        }

        localStorage.setItem("token", token);
        localStorage.setItem("role", userRole);

        login(token, userRole);

        if (userRole === "Admin") {
          navigate("/admin"); // Redirect to Admin route
        } else {
          navigate("/"); // Redirect to home for non-admin users
        }
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Reset error message on new login attempt
    loginRequest(email, password);
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
            placeholder="Enter your email"
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
            placeholder="Enter your password"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
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
