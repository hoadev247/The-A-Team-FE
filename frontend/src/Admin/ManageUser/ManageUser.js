import React, { useState } from "react";
import "./ManageUser.css";

function User() {
  const [search, setSearch] = useState("");
  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Viewer" },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user-container">
      {/* Tiêu đề */}
      <header className="user-header">
        <h1>User Management</h1>
        <p>Manage all platform users from this page.</p>
      </header>

      {/* Thanh tìm kiếm */}
      <div className="user-search">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Danh sách người dùng */}
      <div className="user-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn-edit">Edit</button>
                    <button className="btn-delete">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Nút thêm người dùng */}
      <div className="user-add">
        <button className="btn-add">Add New User</button>
      </div>
    </div>
  );
}

export default User;
