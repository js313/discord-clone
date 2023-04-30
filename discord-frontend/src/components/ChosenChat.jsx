import { Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";

const ChosenChat = (props) => {
  return (
    <Typography
      sx={{
        fontSize: "16px",
        color: "white",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
      }}
    >
      {props.name}
    </Typography>
  );
};

export default connect((state) => {
  return {
    name:
      state.chat.chatDetails?.username || state.chat.chatDetails?.name || "",
  };
})(ChosenChat);
