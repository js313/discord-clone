import { loginApi, registerApi } from "../../api";

const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
    register: (userDetails, navigate) =>
      dispatch(register(userDetails, navigate)),
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    payload: userDetails,
  };
};

const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const { response, success } = await loginApi(userDetails.email, userDetails.password);
    if (!success || !response.data.success) {
    } else {
      console.log("data", response);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      dispatch(setUserDetails(response.data));
      navigate("/");
    }
  };
};

const register = (userDetails, navigate) => {
  return async (dispatch) => {
    const { response, success } = await registerApi(userDetails.username, userDetails.email, userDetails.password);
    if (!success || !response.data.success) {
    } else {
      console.log("data", response);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      dispatch(setUserDetails(response.data));
      navigate("/");
    }
  };
};

export default authActions;