import React from "react";
import { styled } from "@mui/system";
import MainPageButton from "./MainPageButton";
import CreateRoomButton from "./CreateRoomButton";
import { connect } from "react-redux";
import ActiveRoomButton from "./ActiveRoomButton";

const Wrapper = styled("div")(({ theme }) => ({
  width: "72px",
  height: "100%",
  backgroundColor: "#202225",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const Sidebar = (props) => {
  let showNewRoomBtn = true;
  return (
    <Wrapper>
      <MainPageButton />
      {props.activeRooms.map((room) => {
        if (room.roomCreator.userId === props.userDetails.id)
          showNewRoomBtn = false;
        return <ActiveRoomButton key={room.id} room={room} />;
      })}
      {showNewRoomBtn && <CreateRoomButton />}
    </Wrapper>
  );
};

export default connect((state) => {
  return { ...state.room, ...state.auth };
})(Sidebar);
