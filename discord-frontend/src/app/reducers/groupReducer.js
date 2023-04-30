import { groupActions } from "../actions/groupActions";

const initState = {
  groups: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
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
