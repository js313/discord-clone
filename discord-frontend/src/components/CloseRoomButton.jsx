import React from "react";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { IconButton } from "@mui/material";
import { leaveRoom } from "../socket/roomHandler";
import { connect } from "react-redux";

const CloseRoomButton = (props) => {
  console.log(props);
  return (
    <IconButton
      style={{ color: "white" }}
      onClick={() => {
        leaveRoom(props.roomDetails.roomId);
      }}
    >
      <ExitToAppRoundedIcon />
    </IconButton>
  );
};

export default connect((state) => {
  return state.room;
})(CloseRoomButton);
