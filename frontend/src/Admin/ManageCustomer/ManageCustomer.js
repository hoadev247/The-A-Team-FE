import React, { useState } from "react";
import "./ManageCustomer.css";
import "./CustomerResponsive.css"

function Customer() {
  const [search, setSearch] = useState("");
  const customers = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "098-765-4321" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", phone: "555-123-4567" },
  ];

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="customer-container">
      {/* Tiêu đề */}
      <header className="customer-header">
        <h1>Customer Management</h1>
        <p>Manage your customers effectively here.</p>
      </header>

      {/* Thanh tìm kiếm */}
      <div className="customer-search">
        <input
          type="text"
          placeholder="Search customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Bảng danh sách khách hàng */}
      <div className="customer-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>
                    <button className="btn-edit">Edit</button>
                    <button className="btn-delete">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No customers found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Nút thêm khách hàng */}
      <div className="customer-add">
        <button className="btn-add">Add New Customer</button>
      </div>
    </div>
  );
}

export default Customer;
