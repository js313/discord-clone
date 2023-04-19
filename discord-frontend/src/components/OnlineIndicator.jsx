import { Box } from "@mui/material";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import React from "react";
//'#3ba55d',
const OnlineIndicator = (props) => {
  return (
    <Box
      sx={{
        color: props.online ? "#3ba55d" : "transparent",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        right: "5px",
        top: "17px",
      }}
    >
      <FiberManualRecordRoundedIcon sx={{ width: "13px", height: "13px" }} />
    </Box>
  );
};

export default OnlineIndicator;
