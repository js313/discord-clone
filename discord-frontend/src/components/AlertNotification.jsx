import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { getActions } from "../app/actions/alertActions";

const AlertNotification = (props) => {
  return (
    <Snackbar
      open={props.show}
      autoHideDuration={6000}
      onClose={props.hideAlert}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={props.hideAlert}
        severity={props.severity || "info"}
        sx={{ width: "100%", display: `${props.show ? "flex" : "none"}` }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default connect(
  (state) => {
    return { ...state.alert };
  },
  (dispatch) => {
    return { ...getActions(dispatch) };
  }
)(AlertNotification);
