import React, { useState, useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [securityInfo, setSecurityInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Kiểm tra nếu người dùng chưa đăng nhập, điều hướng về trang login
  useEffect(() => {
    if (!auth.token) {
      console.log("No token, redirecting to login");
      navigate("/login");
    } else {
      const fetchData = async () => {
        setLoading(true);
        try {
          // Log token to ensure it's being sent correctly
          console.log("Token:", auth.token);

          // Fetch user data
          const userData = {
            name: "John Doe",
            email: "john@example.com",
            memberType: "Member",
            avatarUrl: "https://via.placeholder.com/100", // Check if avatar exists
          };
          setUser(userData);

          // Fetch orders
          const orderData = [
            { id: 1, date: "2024-10-01", status: "Shipped", total: "$25" },
            { id: 2, date: "2024-10-15", status: "Processing", total: "$40" },
          ];
          setOrders(orderData);

          // Fetch security info
          const securityData = {
            passwordLastChanged: "2024-08-15",
            twoFactorEnabled: true,
          };
          setSecurityInfo(securityData);
        } catch (err) {
          setError("Error fetching data");
          console.error("Error:", err); // Log errors
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [auth.token, navigate]);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      logout();
      navigate("/"); // Redirect to home
    }
  };

  const renderContent = () => {
    if (loading) {
      return <div className="loader">Loading...</div>; // You can add a spinner here
    }

    if (error) {
      return <p>{error}</p>;
    }

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
              <p>Không có thông tin người dùng</p>
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
              <p>Không có thông tin bảo mật</p>
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
        <div className="tabs">
          <button
            onClick={() => setActiveTab("profile")}
            className={activeTab === "profile" ? "active" : ""}
          >
            Thông Tin Người Dùng
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={activeTab === "orders" ? "active" : ""}
          >
            Đơn Hàng Đã Mua
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={activeTab === "security" ? "active" : ""}
          >
            Bảo Mật
          </button>
        </div>
      </div>
      {renderContent()}
      <button onClick={handleLogout}>Đăng Xuất</button>
    </div>
  );
};

export default UserProfile;
