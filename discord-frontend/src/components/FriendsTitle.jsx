import { Typography } from "@mui/material";
import React from "react";

const FriendsTitle = (props) => {
  return (
    <Typography
      sx={{
        textTransform: "uppercase",
        fontSize: "14px",
        marginTop: "10px",
        marginBottom: "10px",
        color: "#8e9297",
      }}
    >
      {props.title}
    </Typography>
  );
};

export default FriendsTitle;
