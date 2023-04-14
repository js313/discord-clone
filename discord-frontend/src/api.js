const axios = require("axios");

const apiClient = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 1000,
});

export const login = async (email, password) => {
  try {
    const response = await apiClient.post("/auth/login", {
      email,
      password,
    });
    return { success: true, response };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error,
    };
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await apiClient.post("/auth/register", {
      username,
      email,
      password,
    });
    return { success: true, response };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error,
    };
  }
};
