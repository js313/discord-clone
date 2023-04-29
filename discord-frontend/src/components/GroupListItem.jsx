import React from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, ListItemButton } from "@mui/material";
import OnlineIndicator from "./OnlineIndicator";
import { chatTypes, getActions } from "../app/actions/chatActions";
import { connect } from "react-redux";
import { getChatHistoryApi } from "../api";

const GroupListItem = (props) => {
  const handleChooseActiveChat = async () => {
    if (props.conversation.id === props.chatDetails?.id) return;
    props.setChatDetails(
      { id: props.conversation.id, username: props.conversation.name },
      chatTypes.DIRECT
    );
    props.setMessages([]);
    const response = await getChatHistoryApi(props.conversation.id);
    props.setMessages(response.messages);
  };

  return (
    <>
      <ListItemButton
        disableGutters
        sx={{ p: 0, px: 1 }}
        onClick={handleChooseActiveChat}
      >
        <ListItemAvatar>
          <Avatar
            sx={{
              backgroundColor: `${
                props.conversation.iconBackground || "#7289da"
              }`,
              fontSize: "15px",
              width: "35px",
              height: "35px",
            }}
          >
            {props.conversation.name[0].toUpperCase() +
              props.conversation.name[1].toUpperCase()}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          disableTypography
          sx={{ color: "white" }}
          primary={
            <Box sx={{ display: "flex", flex: 1 }}>
              {props.conversation.name}
              <OnlineIndicator online={props.conversation.online} />
            </Box>
          }
          primaryTypographyProps={{ fontSize: "13px" }}
          secondary={
            <Typography
              sx={{ display: "inline", fontSize: "10px" }}
              component="span"
              variant="body2"
              color="white"
            >
              Last Message
            </Typography>
          }
        />
      </ListItemButton>
    </>
  );
};

export default connect(
  (state) => {
    return state.chat;
  },
  (dispatch) => {
    return { ...getActions(dispatch) };
  }
)(GroupListItem);
