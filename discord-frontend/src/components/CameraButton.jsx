import React, { useState } from "react";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import VideocamOffRoundedIcon from "@mui/icons-material/VideocamOffRounded";
import { IconButton } from "@mui/material";

const CameraButton = () => {
  const [cameraEnabled, setCameraEnabled] = useState(true);
  return (
    <IconButton
      style={{ color: "white" }}
      onClick={() => setCameraEnabled((state) => !state)}
    >
      {cameraEnabled ? <VideocamRoundedIcon /> : <VideocamOffRoundedIcon />}
    </IconButton>
  );
};

export default CameraButton;
