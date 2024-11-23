import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Client/Home/Home";
import About from "./Client/About/About";
import Contact from "./Client/Contact/Contact";
import News from "./Client/News/News";
import LoginForm from "./Client/Login/LoginForm";
import RegisterForm from "./Client/Register/RegisterForm";
import CartForm from "./Client/Cart/CartForm";

import ForgotOrResetPasswordForm from "./Client/ForgotPassword/ForgotPassword";
import Authentication from "./Admin/Authentication/Authentication";
import { AuthContext, AuthProvider } from "./Context/AuthContext"; // Import AuthContext và AuthProvider

import ForgotAndResetPassword from "./Client/ForgotPassword/ForgotPassword";
import Authentication from "./Admin/Authentication/Authentication";
import AuthContext, { AuthProvider } from "./Context/AuthContext"; // Import AuthProvider

// Admin routes

import Dashboard from "./Admin/Dashboard/Dashboard";
import Customer from "./Admin/ManageCustomer/ManageCustomer";
import Product from "./Admin/Product/Product";
import Order from "./Admin/Order/Order";
import Inventory from "./Admin/Inventory/Inventory";
import AdminPanel from "./Admin/AdminPanel/Panel";
import User from "./Admin/ManageUser/ManageUser";


import ForgotPassword from "./Client/ForgotPassword/ForgotPassword";

import ResetPassword from "./Client/ResetPassword/ResetPassword";
import EnterCode from "./Client/EnterCode/EnterCode";
import "./App.css";

function App() {

  const { auth } = useContext(AuthContext); // Sử dụng AuthContext để lấy trạng thái xác thực

  const { auth } = useContext(AuthContext); // Access auth state


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Client Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/cart" element={<CartForm />} />

          <Route
            path="/forgot-password"
            element={<ForgotOrResetPasswordForm />}
          />

          <Route path="/forgot-password" element={<ForgotAndResetPassword />} />

          {/* Admin Routes */}
          {/* <Route path="/admin" element={<Admin />}></Route> */}

          <Route path="/admin" element={<Authentication />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="customers" element={<Customer />} />
            <Route path="product" element={<Product />} />
            <Route path="order" element={<Order />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="panel" element={<AdminPanel />} />
            <Route path="users" element={<User />} />
          </Route>

          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/enter-code" element={<EnterCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Admin Routes */}
          {auth?.role === "admin" ? (
            <Route path="/admin" element={<Authentication />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="customers" element={<Customer />} />
              <Route path="product" element={<Product />} />
              <Route path="order" element={<Order />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="panel" element={<AdminPanel />} />
              <Route path="users" element={<User />} />
            </Route>
          ) : (
            <Route path="/admin/*" element={<LoginForm />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}


// Đổi tên thành WrappedApp thay vì AuthContext


export default function WrappedApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
