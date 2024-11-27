import React, { createContext, useContext, useState, useEffect } from "react";
<<<<<<< Updated upstream

<<<<<<< HEAD
// Tạo context
const AuthContext = createContext();
=======

export const AuthContext = createContext(); // Tạo context

export const useAuth = () => useContext(AuthContext); // Custom hook để sử dụng AuthContext
>>>>>>> e61fb4d43638ef5d3616ad79893a0ab7c01ce004

// Cung cấp context cho các component con
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token"),
    role: localStorage.getItem("role"),
  });

  const login = (token, role) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    setAuth({ token, role });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuth({ token: null, role: null });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token && role) {
      setAuth({ token, role });
    }
  }, []);
=======
>>>>>>> Stashed changes

// Tạo context
const AuthContext = createContext();

// Cung cấp context cho các component con
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token"),
    role: localStorage.getItem("role"),
  });

  const login = (token, role) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    setAuth({ token, role });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuth({ token: null, role: null });
  };

<<<<<<< Updated upstream
=======
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token && role) {
      setAuth({ token, role });
    }
  }, []);
>>>>>>> Stashed changes

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

<<<<<<< Updated upstream
<<<<<<< HEAD
// Hook để truy cập vào context
export const useAuth = () => useContext(AuthContext);

export default AuthContext; // Thêm export mặc định AuthContext
=======


export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;

>>>>>>> e61fb4d43638ef5d3616ad79893a0ab7c01ce004
=======
// Hook để truy cập vào context
export const useAuth = () => useContext(AuthContext);

export default AuthContext; // Thêm export mặc định AuthContext
>>>>>>> Stashed changes
