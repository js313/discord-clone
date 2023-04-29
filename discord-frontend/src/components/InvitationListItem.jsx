import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Avatar, Tooltip } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { connect } from "react-redux";
import { getActions } from "../app/actions/friendsActions";

const InvitationListItem = (props) => {
  const handleAcceptInvitation = () => {
    props.acceptFriendRequest(props.invite);
  };

  const handleRejectInvitation = () => {
    props.rejectFriendRequest(props.invite);
  };

  return (
    <ListItem
      disableGutters
      sx={{ color: "white", px: 1 }}
      secondaryAction={
        <>
          <IconButton
            sx={{ color: "#1976d2", mr: 0.5 }}
            onClick={handleAcceptInvitation}
          >
            <PersonAddIcon />
          </IconButton>
          <IconButton
            sx={{ color: "indianred" }}
            onClick={handleRejectInvitation}
          >
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <Tooltip title={props.invite.senderId.email}>
        <>
          <Avatar
            sx={{
              backgroundColor: `${
                props.invite.senderId.imageBackground || "#7289da"
              }`,
              fontSize: "15px",
              width: "35px",
              height: "35px",
              mr: 1,
            }}
          >
            {props.invite.senderId.username[0].toUpperCase() +
              props.invite.senderId.username[1]}
          </Avatar>
          <ListItemText primary={props.invite.senderId.username} />
        </>
      </Tooltip>
    </ListItem>
  );
};

export default connect(null, (dispatch) => {
  return {
    ...getActions(dispatch),
  };
})(InvitationListItem);
