import React, { useState } from "react";
import { styled } from "@mui/system";
import RoomButtons from "./RoomButtons";
import VideoContainer from "./VideoContainer";

const Wrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "end",
  backgroundColor: "#202225",
}));

const fullScreenRoomStyle = {
  width: "100%",
  height: "100%",
};

const minimizedRoomSize = {
  bottom: "0px",
  right: "0px",
  width: "30%",
  height: "40vh",
};

const Room = () => {
  const [isMinimized, setIsMinimized] = useState(true);
  const roomResizeHandler = () => {
    setIsMinimized((state) => !state);
  };

  return (
    <Wrapper style={isMinimized ? minimizedRoomSize : fullScreenRoomStyle}>
      <VideoContainer />
      <RoomButtons
        isMinimized={isMinimized}
        roomResizeHandler={roomResizeHandler}
      />
    </Wrapper>
  );
};

export default Room;
