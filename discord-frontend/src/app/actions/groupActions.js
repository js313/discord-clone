import { createNewGroupApi } from "../../api";
import { showAlert } from "./alertActions";

export const groupActions = {
  SET_GROUP_DETAILS: "GROUP.SET_GROUP_DETAILS",
  SET_GROUP_TYPE: "GROUP.SET_GROUP_TYPE",
  SET_MESSAGES: "GROUP.SET_MESSAGES",
  SET_GROUPS: "GROUP.SET_GROUPS",
};

export const getActions = (dispatch) => {
  return {
    setGroupDetails: (details, type) => {
      dispatch(setGroupDetails(details, type));
    },
    setMessages: (messages) => {
      dispatch(setMessages(messages));
    },
    setGroups: (groups) => {
      dispatch(setGroups(groups));
    },
    createNewGroup: (data) => {
      dispatch(createNewGroup(data));
    },
  };
};

export const setGroupDetails = (details, type) => {
  return {
    type: groupActions.SET_GROUP_DETAILS,
    payload: {
      details,
      type,
    },
  };
};

export const setMessages = (messages) => {
  return {
    type: groupActions.SET_MESSAGES,
    payload: messages,
  };
};

export const setGroups = (groups) => {
  return {
    type: groupActions.SET_GROUPS,
    payload: groups,
  };
};

const createNewGroup = (data) => {
  return async (dispatch) => {
    const { response, success, error } = await createNewGroupApi(data);
    if (!success || !response.data.success) {
      dispatch(
        showAlert(error.response.data.message || "Group not created", "error")
      );
    } else {
      dispatch(showAlert("Group created successfully", "success"));
    }
  };
};
