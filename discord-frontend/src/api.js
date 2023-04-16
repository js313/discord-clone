import axios from 'axios'

const apiClient = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 2000,
});

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
