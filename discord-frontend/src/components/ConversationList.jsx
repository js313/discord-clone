import { Divider, List, styled } from "@mui/material";
import React from "react";
import ConversationListItem from "./ConversationListItem";
import { connect } from "react-redux";
import GroupListItem from "./GroupListItem";

const Wrapper = styled("div")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  overflow: "auto",
}));

const ConversationList = (props) => {
  return (
    <Wrapper>
      <List sx={{ width: "100%", bgcolor: "transparent" }} disablePadding>
        {props.conversations.map((conversation) => {
          if (conversation.email) {
            return (
              <React.Fragment key={conversation.id}>
                <ConversationListItem conversation={conversation} />
                <Divider variant="inset" component="li" />
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={conversation._id}>
              <GroupListItem conversation={conversation} />
              <Divider variant="inset" component="li" />
            </React.Fragment>
          );
        })}
      </List>
    </Wrapper>
  );
};

export default connect((state) => {
  return { conversations: [...state.friend.friends, ...state.group.groups] }; //sort by latest message
})(ConversationList);
