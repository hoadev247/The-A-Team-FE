import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext(); // Tạo context

export const useAuth = () => useContext(AuthContext); // Custom hook để sử dụng AuthContext

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null); // Trạng thái mặc định

  const login = (userData) => setAuth(userData); // Hàm login
  const logout = () => setAuth(null); // Hàm logout

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
