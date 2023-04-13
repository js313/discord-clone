const initState = {
  userDetails: null,
  token: null,
  error: null,
  loading: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "DUMMY":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
