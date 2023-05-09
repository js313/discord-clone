import React, { useState } from "react";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import MicOffRoundedIcon from "@mui/icons-material/MicOffRounded";
import { IconButton } from "@mui/material";

const MicButton = () => {
  const [micEnabled, setMicEnabled] = useState(true);
  return (
    <IconButton
      style={{ color: "white" }}
      onClick={() => setMicEnabled((state) => !state)}
    >
      {micEnabled ? <MicRoundedIcon /> : <MicOffRoundedIcon />}
    </IconButton>
  );
};

export default MicButton;
