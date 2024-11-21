import React, { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css";

const ForgotAndResetPassword = () => {
  const [step, setStep] = useState("forgot"); // 'forgot' or 'reset'
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("/api/auth/forgot-password", { email });
      setMessage(response.data);
      setStep("reset"); // Move to reset password step after successful request
    } catch (err) {
      setError(err.response?.data || "An error occurred. Please try again.");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("/api/auth/reset-password", {
        token,
        newPassword,
      });
      setMessage(response.data);
      setStep("forgot"); // Optionally, reset to initial step after success
    } catch (err) {
      setError(err.response?.data || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>{step === "forgot" ? "Forgot Password" : "Reset Password"}</h2>
      {step === "forgot" ? (
        <form onSubmit={handleForgotPassword} className="form">
          <div className="form-group">
            <label htmlFor="email">Enter your email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Send Reset Link
          </button>
        </form>
      ) : (
        <form onSubmit={handleResetPassword} className="form">
          <div className="form-group">
            <label htmlFor="token">Reset Token</label>
            <input
              type="text"
              id="token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Reset Password
          </button>
        </form>
      )}
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ForgotAndResetPassword;
