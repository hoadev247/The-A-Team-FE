import { Navigate } from "react-router-dom"; // Import hook để điều hướng
import AuthService from "../AuthService";
import { useState } from "react";
import './AuthForm.css'

const AuthForm = () => {
    const [view, setView] = useState("login");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        email: "",
        password: "",
        token: "",
        newPassword: "",
    });
    const [message, setMessage] = useState("");
    const navigate = Navigate(); // Hook để điều hướng

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (view === "login") {
                response = await AuthService.login({
                    email: formData.email,
                    password: formData.password
                });
    
                localStorage.setItem("token", response.token);
                localStorage.setItem("role", response.role); // Lưu role vào localStorage
    
                // Kiểm tra role để chuyển hướng
                if (response.role === "admin") {
                    return <Navigate to="/admin" />;
                } else {
                    return <Navigate to="/client" />;
                }
            }
        } catch (error) {
            setMessage(error.response?.data || "Đã xảy ra lỗi.");
        }
    };

    return (
        <div>
            <h2>{view === "login" ? "Đăng nhập" : view === "register" ? "Đăng ký" : view === "forgot" ? "Quên mật khẩu" : "Đặt lại mật khẩu"}</h2>
            <form onSubmit={handleSubmit}>
                {view === "register" && (
                    <>
                        <input type="text" name="firstName" placeholder="Họ" onChange={handleChange} required />
                        <input type="text" name="lastName" placeholder="Tên" onChange={handleChange} required />
                        <input type="date" name="dateOfBirth" onChange={handleChange} required />
                    </>
                )}
                {view !== "reset" && (
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                )}
                {view === "login" || view === "register" ? (
                    <input type="password" name="password" placeholder="Mật khẩu" onChange={handleChange} required />
                ) : null}
                {view === "reset" && (
                    <>
                        <input type="text" name="token" placeholder="Mã xác thực" onChange={handleChange} required />
                        <input type="password" name="newPassword" placeholder="Mật khẩu mới" onChange={handleChange} required />
                    </>
                )}
                <button type="submit">
                    {view === "login"
                        ? "Đăng nhập"
                        : view === "register"
                        ? "Đăng ký"
                        : view === "forgot"
                        ? "Gửi email"
                        : "Đặt lại mật khẩu"}
                </button>
            </form>
            <div>
                {view !== "login" && <button onClick={() => setView("login")}>Đăng nhập</button>}
                {view !== "register" && <button onClick={() => setView("register")}>Đăng ký</button>}
                {view !== "forgot" && view === "login" && <button onClick={() => setView("forgot")}>Quên mật khẩu?</button>}
            </div>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AuthForm;
