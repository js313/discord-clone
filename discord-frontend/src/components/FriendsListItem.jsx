import React from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, ListItemButton } from "@mui/material";
import OnlineIndicator from "./OnlineIndicator";
import { chatTypes, getActions } from "../app/actions/chatActions";
import { connect } from "react-redux";

const FriendsListItem = (props) => {
  const handleChooseActiveChat = () => {
    props.setChatDetails(
      { id: props.friend.id, username: props.friend.username },
      chatTypes.DIRECT
    );
  };

  return (
    <>
      <ListItemButton
        disableGutters
        sx={{ p: 0, px: 0.5 }}
        onClick={handleChooseActiveChat}
      >
        <ListItemAvatar>
          <Avatar
            sx={{
              backgroundColor: "red",
              fontSize: "15px",
              width: "35px",
              height: "35px",
            }}
          >
            {props.friend.username[0].toUpperCase() + props.friend.username[1]}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          disableTypography
          sx={{ color: "white" }}
          primary={
            <Box sx={{ display: "flex", flex: 1 }}>
              {props.friend.username}
              <OnlineIndicator online={props.friend.online} />
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

export default connect(null, (dispatch) => {
  return { ...getActions(dispatch) };
})(FriendsListItem);
