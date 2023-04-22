import { sendFriendRequestApi } from "../../api";
import { showAlert } from "./alertActions";

export const friendsAction = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_FRIEND_REQUESTS: "FRIENDS.SET_FRIEND_REQUESTS",
  SET_ONLINE_FRIENDS: "FRIENDS.SET_ONLINE_FRIENDS",
  SET_FRIEND_REQUESTS_SENT: "FRIENDS.SET_FRIEND_REQUESTS_SENT",
};

export const getActions = (dispatch) => {
  return {
    sendFriendRequest: (data) => {
      dispatch(sendFriendRequest(data));
    },
  };
};

export const setFriendRequests = (friendRequests) => {
  return {
    type: friendsAction.SET_FRIEND_REQUESTS,
    payload: { friendRequests },
  };
};

const sendFriendRequest = (data) => {
  return async (dispatch) => {
    const { response, success, error } = await sendFriendRequestApi(data);
    if (!success || !response.data.success) {
      dispatch(
        showAlert(
          error.response.data.message || "Invitation was not sent",
          "error"
        )
      );
    } else {
      dispatch(showAlert("Invitation sent", "success"));
    }
  };
};