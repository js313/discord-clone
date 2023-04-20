import { styled } from "@mui/material";
import React from "react";
import InvitationListItem from "./InvitationListItem";

const dummyList = [
  {
    id: 1,
    name: "John Doe",
    email: "john@doe.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@doe.com",
  },
  {
    id: 3,
    name: "John Smith",
    email: "john@smith.com",
  },
];

const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "30%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
}));

const InvitationList = () => {
  return (
    <Wrapper>
      {/* <List> */}
      {dummyList.map((invitation) => {
        return <InvitationListItem key={invitation.id} invite={invitation} />;
      })}
      {/* </List> */}
    </Wrapper>
  );
};

export default InvitationList;
