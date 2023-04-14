import { login, register } from "../../api";

export default authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) =>
      dispatch(register(userDetails, history)),
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    payload: userDetails,
  };
};

const login = async (userDetails, history) => {
  return async (dispatch) => {
    const response = await login(userDetails);
    if (!response.success) {
    } else {
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch(setUserDetails(response.data));
      history.push("/");
    }
  };
};
