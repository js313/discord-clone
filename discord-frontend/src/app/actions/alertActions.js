const alertActions = {
  SHOW_ALERT: "ALERT.SHOW_ALERT",
  HIDE_ALERT: "ALERT.HIDE_ALERT",
};

export const getActions = (dispatch) => {
  return {
    showAlert: (message, severity) => {
      dispatch(showAlert(message, severity));
    },
    hideAlert: () => {
      dispatch(hideAlert());
    },
  };
};

export const showAlert = (message, severity) => {
  return {
    type: alertActions.SHOW_ALERT,
    payload: {
      showAlert: true,
      message,
      severity,
    },
  };
};

export const hideAlert = () => {
  return {
    type: alertActions.HIDE_ALERT,
    payload: {
      showAlert: false,
      message: null,
      severity: null,
    },
  };
};

export default alertActions;
