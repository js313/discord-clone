import { createNewGroupApi } from "../../api";
import { showAlert } from "./alertActions";

export const groupActions = {
  SET_GROUPS: "GROUP.SET_GROUPS",
};

export const getActions = (dispatch) => {
  return {
    setGroups: (groups) => {
      dispatch(setGroups(groups));
    },
    createNewGroup: (data) => {
      dispatch(createNewGroup(data));
    },
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
