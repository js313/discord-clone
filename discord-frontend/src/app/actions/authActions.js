import { loginApi, registerApi } from "../../api";
import { disconnectFromSocket } from "../../socket/connection";
import { showAlert } from "./alertActions";
import { setFriendRequests, setFriends } from "./friendsAction";
import { setActiveRooms, setOpenRoom, setRoomDetails } from "./roomActions";

const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
    register: (userDetails, navigate) =>
      dispatch(register(userDetails, navigate)),
    logout: (navigate) => dispatch(logout(navigate)),
    setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)), //if someone lands directly on the dashboard page, we need to set the user details
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
    const { response, success, error } = await loginApi(
      userDetails.email,
      userDetails.password
    );
    if (!success || !response.data.success) {
      dispatch(
        showAlert(error.response.data.message || "Invalid Credentials", "error")
      );
    } else {
      localStorage.setItem("user", JSON.stringify(response.data.data));
      dispatch(setUserDetails(response.data));
      navigate("/");
    }
  };
};

const register = (userDetails, navigate) => {
  return async (dispatch) => {
    const { response, success, error } = await registerApi(
      userDetails.username,
      userDetails.email,
      userDetails.password
    );
    if (!success || !response.data.success) {
      dispatch(
        showAlert(error.response.data.message || "Invalid Credentials", "error")
      );
    } else {
      localStorage.setItem("user", JSON.stringify(response.data.data));
      dispatch(setUserDetails(response.data));
      navigate("/");
    }
  };
};

const logout = (navigate) => {
  return async (dispatch) => {
    localStorage.removeItem("user");
    dispatch(showAlert("Logged Out Successfully.", "success"));
    dispatch(setUserDetails(null));
    dispatch(setFriendRequests([]));
    dispatch(setFriends([]));
    dispatch(setActiveRooms([]));
    dispatch(setOpenRoom());
    dispatch(setRoomDetails(null));
    disconnectFromSocket();
    navigate("/login");
  };
};

export default authActions;
