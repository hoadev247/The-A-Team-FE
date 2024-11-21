import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Hook để điều hướng

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset email sent to:", email);
    // Sau khi xử lý gửi email thành công, điều hướng đến trang nhập mã xác minh
    navigate("/enter-code", { state: { email } }); // Gửi email qua state
  };

  return (
    <div className="form-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} className="form">
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
    </div>
  );
};

export default ForgotPassword;
