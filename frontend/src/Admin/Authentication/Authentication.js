import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Customer from '../ManageCustomer/ManageCustomer';
import User from '../ManageUser/ManageUser';
import Product from '../Product/Product';
import Order from '../Order/Order';
import Inventory from '../Inventory/Inventory';
import AdminPanel from '../AdminPanel/Panel';
import { IoMenu } from "react-icons/io5";
import { FaRegTimesCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

import './Authentication.css';

function Authentication() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);  // State for sidebar visibility

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isRightMenuOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="logo">
          <a className='admin-dark'>
            <img src="https://modernize-nextjs.adminmart.com/images/logos/dark-logo.svg" className="admin-light" />
          </a>
        </div>
        <nav className="admin-nav">
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/inventory">Inventory</Link>
            </li>
            <li>
              <Link to="/panel">Panel</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main">

      <nav className="admin-vs">
        <div className="admin-right">
      {/* Ô tìm kiếm */}
        <div className='admin-isolate'>
          <div className="search-box">
            <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-btn">
            <i className="search-icon"><IoSearch /></i>
          </button>
          </div>
        </div>

          {/* Icon Gmail */}
          <div className="icon gmail-icon">
            <i><MdOutlineEmail /></i>
          </div>

          {/* Icon Thông báo */}
          <div className="icon notification-icon">
            <i><IoMdNotificationsOutline /></i>
          </div>

          {/* Thông tin người dùng */}
          <div className="user-info">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="user-avatar"
            />
            <span className="user-name">John Doe</span>
          </div>
        </div>
      </nav>


      <div className="admin-inhud">
        <label htmlFor="admin-mobile-input" className='admin-content'>
          <button className="admin-icon" onClick={toggleSidebar}>
            <a className="admin-a"><IoMenu /></a>
          </button>
        </label>

        <div className="logo1">
          <a className='admin-dark1'>
            <img src="https://modernize-nextjs.adminmart.com/images/logos/dark-logo.svg" className="admin-light" />
          </a>
        </div>

        <label htmlFor="admin-mobile-mount" className='admin-mont'>
          <button className="admin-icon1" onClick={toggleSidebar}>
            <a className="admin-a1"><BsThreeDotsVertical /></a>
          </button>
        </label>        
      </div>

      {/* Phần thông tin người dùng và icon */}

      <div className={`admin-overlay1 ${isRightMenuOpen? 'show' : ''}`} onClick={toggleSidebar}></div>
      <div className={`admin-mobile1 ${isRightMenuOpen ? 'open' : ''}`}>
          <div className="admin-mobile-close" onClick={toggleSidebar}>
            <FaRegTimesCircle />
          </div>
          <div className='admin-toin'>
          <div className='admin-isolate'>
            <div className="search-box">
              <input type="text" placeholder="Search..." className="search-input" />
              <button className="search-btn">
                <i className="search-icon"><IoSearch /></i>
              </button>
            </div>
          </div>
          <div className="icon gmail-icon">
            <i>
              <a>
                Gmail
              </a>
            </i>
          </div>
          <div className="icon notification-icon">
            <i>
              <a>
              Notification
              </a>
            </i>
          </div>
          <div className="user-info">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="user-avatar"
            />
            <span className="user-name">John Doe</span>
          </div>
          </div>
      </div>

     {/* Nút bật menu phải */}


        {/* Sidebar toggle using state */}
        <div className={`admin-overlay ${isSidebarOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
        <nav className={`admin-mobile ${isSidebarOpen ? 'open' : ''}`}>
          <div className="admin-mobile-close" onClick={toggleSidebar}>
            <FaRegTimesCircle />
          </div>
          <ul className='admin-mobile-link'>
            <li>
              <Link to="dashboard" className='admin-mobile-list'>Dashboard</Link>
            </li>
            <li>
              <Link to="customers" className='admin-mobile-list'>Customers</Link>
            </li>
            <li>
              <Link to="product" className='admin-mobile-list'>Product</Link>
            </li>
            <li>
              <Link to="order" className='admin-mobile-list'>Order</Link>
            </li>
            <li>
              <Link to="inventory" className='admin-mobile-list'>Inventory</Link>
            </li>
            <li>
              <Link to="panel" className='admin-mobile-list'>Panel</Link>
            </li>
            <li>
              <Link to="users" className='admin-mobile-list'>Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/panel" element={<AdminPanel />} />
          <Route path="/users" element={<User />} />
        </Routes>
      </main>
    </div>
  );
}

export default Authentication;
