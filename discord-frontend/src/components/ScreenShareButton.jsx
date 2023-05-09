import React, { useState } from "react";
import ScreenShareRoundedIcon from "@mui/icons-material/ScreenShareRounded";
import StopScreenShareRoundedIcon from "@mui/icons-material/StopScreenShareRounded";
import { IconButton } from "@mui/material";

const ScrrenShareButton = () => {
  const [isScreenSharing, setScreenSharing] = useState(true);
  return (
    <IconButton
      style={{ color: "white" }}
      onClick={() => setScreenSharing((state) => !state)}
    >
      {isScreenSharing ? (
        <ScreenShareRoundedIcon />
      ) : (
        <StopScreenShareRoundedIcon />
      )}
    </IconButton>
  );
};

export default ScrrenShareButton;
