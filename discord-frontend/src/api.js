import axios from "axios";
import store from "./app/store";

const apiClient = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 2000,
});

apiClient.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem("user");
    if (user) {
      const token = JSON.parse(user).token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// public routes

export const loginApi = async (email, password) => {
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

export const registerApi = async (username, email, password) => {
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

const checkResponseCode = (response) => {
  if (response.status === 401 || response.status === 403) {
    store.auth.logout();
  }
};

// protected routes
