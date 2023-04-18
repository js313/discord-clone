import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")(({ theme }) => ({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
}));

const FriendsSidebar = () => {
  return <Wrapper>FriendsSidebar</Wrapper>;
};

export default FriendsSidebar;
