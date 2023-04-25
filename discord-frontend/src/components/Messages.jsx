import React from "react";
import { connect } from "react-redux";
import { styled } from "@mui/system";
import { Avatar, Box, Typography } from "@mui/material";

const Wrapper = styled("div")(({ theme }) => ({
  height: "calc(100% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  padding: "0 12px",
}));

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "97%",
  marginTop: "12px",
}));

const DUMMY_MESSAGES = [
  {
    _id: 1,
    content: "hello",
    sameAuthor: "false",
    author: {
      username: "Marek",
    },
    date: "22/01/2022",
    sameDay: false,
  },
  {
    _id: 2,
    content: "hello once again",
    sameAuthor: "true",
    author: {
      username: "Marek",
    },
    date: "22/01/2022",
    sameDay: true,
  },
  {
    _id: 3,
    content: "hello third time",
    sameAuthor: "true",
    author: {
      username: "Marek",
    },
    date: "23/01/2022",
    sameDay: false,
  },
  {
    _id: 4,
    content: "hello response first time",
    sameAuthor: false,
    author: {
      username: "John",
    },
    date: "23/01/2022",
    sameDay: true,
  },
  {
    _id: 5,
    content: "hello response third time",
    sameAuthor: true,
    author: {
      username: "John",
    },
    date: "24/01/2022",
    sameDay: false,
  },
];

const Messages = (props) => {
  return (
    <Wrapper>
      {DUMMY_MESSAGES.map((message) => {
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
              {message.author.username[0].toUpperCase() +
                message.author.username[1]}
            </Avatar>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontSize: "13px", color: "white" }}>
                {`${message.author.username} `}
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
