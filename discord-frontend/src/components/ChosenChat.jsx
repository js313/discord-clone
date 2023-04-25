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
      {props.username}
    </Typography>
  );
};

export default connect((state) => {
  return {
    username: state.chat.chatDetails?.username || "",
  };
})(ChosenChat);
