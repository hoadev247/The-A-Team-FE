import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../../Context/AuthContext"; // Import useAuth instead of AuthContext
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
  const { login } = useAuth(); // Use useAuth hook to get login function
  const navigate = useNavigate();

  const API_URL = "http://localhost:5024/api/auth";

  const loginRequest = async (email, password) => {
    try {
      setLoading(true); // Start loading
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
      const { token } = data;

      if (token) {
        const decodedToken = jwtDecode(token);
        const userRole =
          decodedToken[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ];

        if (!userRole) {
          throw new Error("User role is not defined in the token");
        }

        localStorage.setItem("token", token);
        localStorage.setItem("role", userRole);
        login(token, userRole);

        if (userRole === "Admin") {
          navigate("/admin");
        } else {
          navigate("/"); // Navigate to the home page for non-admins
        }
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // End loading
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginRequest(email, password);
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-container">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
      <Link to="/forgot-password">Forgot your password?</Link>
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginForm;
