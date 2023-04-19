import { Divider, List, styled } from "@mui/material";
import React from "react";
import FriendsListItem from "./FriendsListItem";

const dummyList = [
  {
    id: 1,
    name: "John Doe",
    online: true,
  },
  {
    id: 2,
    name: "Jane Doe",
    online: false,
  },
  {
    id: 3,
    name: "John Smith",
    online: true,
  },
];

const Wrapper = styled("div")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  overflow: "auto",
}));

const FriendsList = () => {
  return (
    <Wrapper>
      <List sx={{ width: "100%", bgcolor: "transparent" }} disablePadding>
        {dummyList.map((friend) => (
          <>
            <FriendsListItem key={friend.id} friend={friend} />
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </Wrapper>
  );
};

export default FriendsList;
