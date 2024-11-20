import React, { useState } from "react"; // Đảm bảo import useState từ React
import Header from "../../Components/Header/Header";
import "./Contact.css";

const Contact = () => {
  // Khai báo state cho form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Hàm xử lý sự kiện thay đổi giá trị input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Hàm xử lý khi form được gửi
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form (ví dụ: gọi API gửi email hoặc lưu vào cơ sở dữ liệu)
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <Header />
      <h1>Contact Us</h1>
      <div className="contact-container">
        <section className="contact-info">
          <div className="contact-details">
            <h2>Our Contact Information</h2>
            <p>Address: 123 Main Street, City, Country</p>
            <p>Email: contact@company.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </section>

        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
