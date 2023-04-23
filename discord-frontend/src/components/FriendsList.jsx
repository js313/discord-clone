import { Divider, List, styled } from "@mui/material";
import React from "react";
import FriendsListItem from "./FriendsListItem";
import { connect } from "react-redux";

const Wrapper = styled("div")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  overflow: "auto",
}));

const FriendsList = (props) => {
  return (
    <Wrapper>
      <List sx={{ width: "100%", bgcolor: "transparent" }} disablePadding>
        {props.friends.map((friend) => (
          <React.Fragment key={friend.id}>
            <FriendsListItem key={friend.id} friend={friend} />
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Wrapper>
  );
};

export default connect((state) => {
  return state.friend;
})(FriendsList);
