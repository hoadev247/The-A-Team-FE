import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Fixed duplicate imports
import Home from "./Client/Home/Home";
import About from "./Client/About/About";
import Contact from "./Client/Contact/Contact";
import News from "./Client/News/News";
import LoginForm from "./Client/Login/LoginForm";
import RegisterForm from "./Client/Register/RegisterForm";
import CartForm from "./Client/Cart/CartForm";
import ForgotPassword from "./Client/ForgotPassword/ForgotPassword";
import ResetPassword from "./Client/ResetPassword/ResetPassword";
import EnterCode from "./Client/EnterCode/EnterCode";
import "./App.css"; // Avoid duplicate import

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/cart" element={<CartForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/enter-code" element={<EnterCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
