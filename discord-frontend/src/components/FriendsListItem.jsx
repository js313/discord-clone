import React from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, ListItemButton } from "@mui/material";
import OnlineIndicator from "./OnlineIndicator";

const FriendsListItem = (props) => {
  return (
    <>
      <ListItemButton disablePadding disableGutters sx={{ p: 0, px: 0.5 }}>
        <ListItemAvatar>
          {props.friend.image ? (
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          ) : (
            <Avatar
              sx={{
                backgroundColor: "red",
                fontSize: "15px",
                width: "35px",
                height: "35px",
              }}
            >
              {props.friend.name[0] + props.friend.name[1]}
            </Avatar>
          )}
        </ListItemAvatar>
        <ListItemText
          disableTypography
          sx={{ color: "white" }}
          primary={
            <Box sx={{ display: "flex", flex: 1 }}>
              {props.friend.name}
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

export default FriendsListItem;
