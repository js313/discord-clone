import { styled } from "@mui/material";
import React from "react";

const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
}));

const InvitationList = () => {
  return <Wrapper>InvitationList</Wrapper>;
};

export default InvitationList;
