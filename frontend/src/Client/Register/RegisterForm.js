import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom để điều hướng
import "./RegisterForm.css"; // Đảm bảo đường dẫn đúng với file CSS của bạn

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra nếu mật khẩu và xác nhận mật khẩu không khớp
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Kiểm tra các trường rỗng
    if (!email || !username || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }

    // Nếu không có lỗi, xử lý đăng ký
    setError("");
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);

    // Thực hiện logic đăng ký (ví dụ gọi API)
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          Register
        </button>
      </form>

      {/* Các liên kết điều hướng */}
      <div className="additional-links">
        <Link to="/" className="home-link">
          Back to Home
        </Link>{" "}
        {/* Link về trang chủ */}
        <Link to="/login" className="login-link">
          Already have an account? Login
        </Link>{" "}
        {/* Link đến trang đăng nhập */}
      </div>
    </div>
  );
};

export default RegisterForm;
