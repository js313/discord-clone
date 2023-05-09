import React from "react";
import { styled } from "@mui/system";
import { IconButton } from "@mui/material";
import OpenInFullRoundedIcon from "@mui/icons-material/OpenInFullRounded";
import CloseFullscreenRoundedIcon from "@mui/icons-material/CloseFullscreenRounded";
import ScreenShareButton from "./ScreenShareButton";
import MicButton from "./MicButton";
import CameraButton from "./CameraButton";
import CloseRoomButton from "./CloseRoomButton";

const Wrapper = styled("div")(({ theme }) => ({
  height: "50px",
  width: "100%",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: "#5865F2",
  maxWidth: "25vw",
}));

const RoomButtons = (props) => {
  return (
    <Wrapper>
      <ScreenShareButton />
      <MicButton />
      <CameraButton />
      <CloseRoomButton />
      <IconButton
        onClick={props.roomResizeHandler}
        style={{
          color: "whitesmoke",
        }}
      >
        {props.isMinimized ? (
          <OpenInFullRoundedIcon />
        ) : (
          <CloseFullscreenRoundedIcon />
        )}
      </IconButton>
    </Wrapper>
  );
};

export default RoomButtons;
