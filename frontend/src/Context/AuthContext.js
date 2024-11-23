import React, { createContext, useState, useContext } from "react";


export const AuthContext = createContext(); // Tạo context

export const useAuth = () => useContext(AuthContext); // Custom hook để sử dụng AuthContext

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null); // Trạng thái mặc định

  const login = (userData) => setAuth(userData); // Hàm login
  const logout = () => setAuth(null); // Hàm logout

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token"),
    role: localStorage.getItem("role"),
  });

  const login = (token, role) => {
    setAuth({ token, role });
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
  };

  const logout = () => {
    setAuth({ token: null, role: null });
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };


  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;

