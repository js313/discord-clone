import authActions from "../actions/authActions";

const initState = {
  userDetails: null,
  token: null,
  error: null,
  loading: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case authActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
