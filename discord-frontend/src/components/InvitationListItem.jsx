import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tooltip } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { connect } from "react-redux";
import { getActions } from "../app/actions/friendsAction";

const InvitationListItem = (props) => {
  const handleAcceptInvitation = () => {
    props.acceptFriendRequest(props.invite);
    console.log("Accept invitation");
  };

  const handleRejectInvitation = () => {
    props.rejectFriendRequest(props.invite);
    console.log("Reject invitation");
  };

  return (
    <ListItem
      sx={{ color: "white" }}
      secondaryAction={
        <>
          <IconButton
            edge="end"
            sx={{ color: "#1976d2", mr: 0.5 }}
            onClick={handleAcceptInvitation}
          >
            <PersonAddIcon />
          </IconButton>
          <IconButton
            edge="end"
            sx={{ color: "indianred" }}
            onClick={handleRejectInvitation}
          >
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <Tooltip title={props.invite.senderId.email}>
        <ListItemText primary={props.invite.senderId.username} />
      </Tooltip>
    </ListItem>
  );
};

export default connect(null, (dispatch) => {
  return {
    ...getActions(dispatch),
  };
})(InvitationListItem);
