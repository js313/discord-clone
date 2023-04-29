import { groupActions } from "../actions/groupActions";

const initState = {
  messages: [],
  groups: [],
  groupDetails: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case groupActions.SET_GROUP_DETAILS:
      return {
        ...state,
        groupDetails: action.payload.details,
      };
    case groupActions.SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    case groupActions.SET_GROUPS:
      return {
        ...state,
        groups: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
