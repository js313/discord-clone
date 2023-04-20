import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tooltip } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const InvitationListItem = (props) => {
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const handleAcceptInvitation = () => {
    console.log("Accept invitation");
  };

  const handleRejectInvitation = () => {
    console.log("Reject invitation");
  };

  return (
    <ListItem
      sx={{ color: "white" }}
      secondaryAction={
        <>
          <IconButton edge="end" sx={{ color: "#1976d2", mr: 0.5 }}>
            <PersonAddIcon />
          </IconButton>
          <IconButton edge="end" sx={{ color: "indianred" }}>
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <Tooltip title={props.invite.email}>
        <ListItemText primary={props.invite.name} />
      </Tooltip>
    </ListItem>
  );
};

export default InvitationListItem;
