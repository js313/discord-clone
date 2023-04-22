import { styled } from "@mui/material";
import React from "react";
import InvitationListItem from "./InvitationListItem";
import { connect } from "react-redux";

const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "30%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
}));

const InvitationList = (props) => {
  return (
    <Wrapper>
      {/* <List> */}
      {props.friendRequests.map((invitation) => {
        return <InvitationListItem key={invitation._id} invite={invitation} />;
      })}
      {/* </List> */}
    </Wrapper>
  );
};

export default connect((state) => {
  return { ...state.friend };
}, null)(InvitationList);
