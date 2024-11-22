import axios from "axios";

const API_URL = "http://localhost:5024/api";

const register = async (data) => {
  const response = await axios.post(`${API_URL}/auth/register`, data); // Use backticks
  return response.data;
};

const login = async (data) => {
  const response = await axios.post(`${API_URL}/auth/login`, data); // Use backticks
  return response.data;
};

const forgotPassword = async (data) => {
  const response = await axios.post(`${API_URL}/auth/forgot-password`, data); // Use backticks
  return response.data;
};

const resetPassword = async (data) => {
  const response = await axios.post(`${API_URL}/auth/reset-password`, data); // Use backticks
  return response.data;
};

export default {
  register,
  login,
  forgotPassword,
  resetPassword,
};
