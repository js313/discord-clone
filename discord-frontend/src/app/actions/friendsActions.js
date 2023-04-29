import {
  acceptFriendRequestApi,
  rejectFriendRequestApi,
  sendFriendRequestApi,
} from "../../api";
import { showAlert } from "./alertActions";

export const friendsAction = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_FRIEND_REQUESTS: "FRIENDS.SET_FRIEND_REQUESTS",
  SET_ONLINE_FRIENDS: "FRIENDS.SET_ONLINE_FRIENDS",
};

export const getActions = (dispatch) => {
  return {
    sendFriendRequest: (data) => {
      dispatch(sendFriendRequest(data));
    },
    acceptFriendRequest: (data) => {
      dispatch(acceptFriendRequest(data));
    },
    rejectFriendRequest: (data) => {
      dispatch(rejectFriendRequest(data));
    },
    setFriends: (friends) => {
      dispatch(setFriends(friends));
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

const acceptFriendRequest = (data) => {
  return async (dispatch) => {
    const { response, success, error } = await acceptFriendRequestApi(data);

    if (!success || !response.data.success) {
      dispatch(
        showAlert(
          error.response.data.message || "Unknown error occured",
          "error"
        )
      );
    } else {
      dispatch(showAlert("New friend added", "success"));
    }
  };
};

const rejectFriendRequest = (data) => {
  return async (dispatch) => {
    const { response, success, error } = await rejectFriendRequestApi(data);

    if (!success || !response.data.success) {
      dispatch(
        showAlert(
          error.response.data.message || "Unknown error occured",
          "error"
        )
      );
    } else {
      dispatch(showAlert("Request deleted", "success"));
    }
  };
};

export const setFriends = (friends) => {
  return {
    type: friendsAction.SET_FRIENDS,
    payload: { friends },
  };
};
