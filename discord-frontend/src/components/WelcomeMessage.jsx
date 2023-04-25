import { Typography } from "@mui/material";
import React from "react";
const { styled } = require("@mui/system");

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
}));

const WelcomeMessage = () => {
  return (
    <Wrapper>
      <Typography sx={{ color: "white" }} variant="h6">
        Select a conversation
      </Typography>
    </Wrapper>
  );
};

export default WelcomeMessage;
