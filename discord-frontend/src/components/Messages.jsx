import React from "react";
import { connect } from "react-redux";
import { styled } from "@mui/system";
import { Avatar, Box, Typography } from "@mui/material";

const Wrapper = styled("div")(({ theme }) => ({
  height: "calc(100% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column-reverse",
  padding: "0 12px",
}));

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "97%",
  marginTop: "12px",
}));

const Messages = (props) => {
  return (
    <Wrapper>
      {props.messages
        .slice(0)
        .reverse()
        .map((message) => {
          if (message.sameDay && message.sameAuthor) {
            return (
              <Box
                key={message._id}
                style={{
                  fontSize: "14px",
                  color: "#DCDDDE",
                  marginLeft: "45px",
                  marginTop: "5px",
                }}
              >
                {message.content}
              </Box>
            );
          }
          return (
            <MainContainer key={message._id}>
              <Avatar
                sx={{
                  backgroundColor: "red",
                  fontSize: "14px",
                  width: "35px",
                  height: "35px",
                  mr: "10px",
                }}
              >
                {message.sender.username[0].toUpperCase() +
                  message.sender.username[1]}
              </Avatar>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "13px", color: "white" }}>
                  {`${message.sender.username} `}
                  <span style={{ fontSize: "12px", color: "grey" }}>
                    {message.date}
                  </span>
                </Typography>
                <div style={{ fontSize: "14px", color: "#DCDDDE" }}>
                  {message.content}
                </div>
              </Box>
            </MainContainer>
          );
        })}
    </Wrapper>
  );
};

export default connect((state) => {
  return state.chat;
})(Messages);
