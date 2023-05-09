import React from "react";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { IconButton } from "@mui/material";

const CloseRoomButton = () => {
  return (
    <IconButton style={{ color: "white" }}>
      <ExitToAppRoundedIcon />
    </IconButton>
  );
};

export default CloseRoomButton;
