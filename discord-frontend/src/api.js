import axios from "axios";

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

const checkNotLoggedIn = ({ response }) => {
  if (response.status === 401 || response.status === 403) {
    window.location = "/login";
  }
};

// protected routes

export const sendFriendRequestApi = async (data) => {
  try {
    const response = await apiClient.post("/friends/send-request", data);
    return { success: true, response };
  } catch (error) {
    console.error(error);
    checkNotLoggedIn(error);
    return {
      success: false,
      error,
    };
  }
};

export const acceptFriendRequestApi = async (data) => {
  try {
    const response = await apiClient.post("/friends/accept-request", {
      id: data._id,
    });
    return { success: true, response };
  } catch (error) {
    checkNotLoggedIn(error);
    return {
      success: false,
      error,
    };
  }
};

export const rejectFriendRequestApi = async (data) => {
  try {
    const response = await apiClient.post("/friends/reject-request", {
      id: data._id,
    });
    return { success: true, response };
  } catch (error) {
    checkNotLoggedIn(error);
    return {
      success: false,
      error,
    };
  }
};

export const getChatHistoryApi = async (receiverId) => {
  try {
    const response = await apiClient.get(`/chat/${receiverId}`);
    return {
      success: true,
      messages: response.data?.data?.messages || [],
      conversationId: response.data?.data?._id,
    };
  } catch (error) {
    checkNotLoggedIn(error);
    return {
      success: false,
      error,
    };
  }
};

export const createNewGroupApi = async (data) => {
  try {
    const response = await apiClient.post(`/group`, {
      name: data.name,
      description: data.description,
    });
    return {
      success: true,
      response,
    };
  } catch (error) {
    checkNotLoggedIn(error);
    return {
      success: false,
      error,
    };
  }
};

export const getGroupHistoryApi = async (groupId) => {
  try {
    const { data } = await apiClient.get(`/group/${groupId}`);
    return {
      success: true,
      messages: data.data.messages,
    };
  } catch (error) {
    checkNotLoggedIn(error);
    return {
      success: false,
      error,
    };
  }
};
