import React from "react";
import Button from "@mui/material/Button";
import { Tooltip, Typography } from "@mui/material";
import { joinRoom } from "../socket/roomHandler";

const ActiveRoomButton = (props) => {
  console.log(props);
  return (
    <Tooltip title={`Users joined: ${props.room.participants.length}`}>
      <Button
        sx={{
          width: "48px",
          height: "48px",
          borderRadius: "16px",
          margin: 0,
          padding: 0,
          minWidth: 0,
          marginTop: "10px",
          color: "white",
        }}
        variant="contained"
        onClick={() => {
          joinRoom({ roomId: props.room.roomCreator.socketId });
        }}
      >
        <Typography>{props.room.roomCreator.username.slice(0, 2)}</Typography>
      </Button>
    </Tooltip>
  );
};

export default ActiveRoomButton;
