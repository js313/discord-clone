import React from "react";
import { styled } from "@mui/system";
import AddFriendButton from "./AddFriendButton";
import FriendsTitle from "./FriendsTitle";
import ConversationList from "./ConversationList";
import InvitationList from "./InvitationList";

const Wrapper = styled("div")(({ theme }) => ({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
}));

const FriendsSidebar = () => {
  return (
    <Wrapper>
      <AddFriendButton />
      <FriendsTitle title="Private Messages" />
      <ConversationList />
      <FriendsTitle title="Invitations" />
      <InvitationList />
    </Wrapper>
  );
};

export default FriendsSidebar;
