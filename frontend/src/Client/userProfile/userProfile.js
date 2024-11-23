import React, { useState, useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css"; // CSS cho trang thông tin tài khoản

const UserProfile = () => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [securityInfo, setSecurityInfo] = useState(null);

  useEffect(() => {
    if (!auth.token) {
      navigate("/login"); // Nếu chưa đăng nhập, chuyển tới trang login
      return;
    }

    // Giả lập lấy thông tin người dùng từ API
    const fetchUserData = async () => {
      const userData = {
        name: "John Doe",
        email: "john@example.com",
        memberType: "Member",
        avatarUrl: "https://via.placeholder.com/100", // Thêm URL avatar của người dùng
      }; // Giả lập
      setUser(userData);
    };

    // Giả lập lấy thông tin đơn hàng
    const fetchOrders = async () => {
      const orderData = [
        { id: 1, date: "2024-10-01", status: "Shipped", total: "$25" },
        { id: 2, date: "2024-10-15", status: "Processing", total: "$40" },
      ]; // Giả lập
      setOrders(orderData);
    };

    // Giả lập lấy thông tin bảo mật
    const fetchSecurityInfo = async () => {
      const securityData = {
        passwordLastChanged: "2024-08-15",
        twoFactorEnabled: true,
      }; // Giả lập
      setSecurityInfo(securityData);
    };

    fetchUserData();
    fetchOrders();
    fetchSecurityInfo();
  }, [auth, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to home after logout
  };

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div>
            <h2>Thông Tin Người Dùng</h2>
            {user ? (
              <div>
                <p>Tên: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Loại thành viên: {user.memberType}</p>
              </div>
            ) : (
              <p>Đang tải thông tin...</p>
            )}
          </div>
        );
      case "orders":
        return (
          <div>
            <h2>Danh Sách Sản Phẩm Đã Mua</h2>
            <table>
              <thead>
                <tr>
                  <th>Ngày</th>
                  <th>Tổng Tiền</th>
                  <th>Trạng Thái</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.date}</td>
                    <td>{order.total}</td>
                    <td>{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "security":
        return (
          <div>
            <h2>Thông Tin Bảo Mật</h2>
            {securityInfo ? (
              <div>
                <p>
                  Ngày đổi mật khẩu gần nhất: {securityInfo.passwordLastChanged}
                </p>
                <p>
                  Mã xác thực 2 bước:{" "}
                  {securityInfo.twoFactorEnabled ? "Đã bật" : "Chưa bật"}
                </p>
              </div>
            ) : (
              <p>Đang tải thông tin bảo mật...</p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="user-profile-container">
      <div className="tabs-container">
        {/* Tabs menu ở bên phải */}
        <div className="tabs">
          <button onClick={() => setActiveTab("profile")}>
            Thông Tin Người Dùng
          </button>
          <button onClick={() => setActiveTab("orders")}>
            Đơn Hàng Đã Mua
          </button>
          <button onClick={() => setActiveTab("security")}>Bảo Mật</button>
        </div>

        {/* Nội dung ở bên trái */}
        <div className="content-container">
          <div className="user-header">
            {/* Logo tài khoản */}
            <div className="user-avatar">
              <img src={user?.avatarUrl} alt="Avatar" />
            </div>
            <h1>Thông Tin Tài Khoản</h1>
          </div>
          <div className="content">{renderContent()}</div>
        </div>
      </div>

      {/* Nút đăng xuất */}
      <button onClick={handleLogout}>Đăng Xuất</button>
    </div>
  );
};

export default UserProfile;
