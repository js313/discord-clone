import alertActions from "../actions/alertActions";

const initState = {
  show: false,
  message: null,
  severity: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case alertActions.SHOW_ALERT:
      return {
        ...state,
        show: true,
        message: action.payload.message,
        severity: action.payload.severity,
      };
    case alertActions.HIDE_ALERT:
      return {
        ...state,
        show: false,
        message: null,
        severity: null,
      };
    default:
      return state;
  }
};

export default reducer;
