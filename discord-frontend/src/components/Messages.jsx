import React from "react";
import { connect } from "react-redux";
import { styled } from "@mui/system";
import { Avatar, Box, Chip, Divider, Typography } from "@mui/material";

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
      {props.messages &&
        props.messages.map((message, index) => {
          const curDate = new Date(props.messages[index].date).toDateString();
          const nextDate =
            index < props.messages.length - 1
              ? new Date(props.messages[index + 1].date).toDateString()
              : "";
          if (
            index < props.messages.length - 1 &&
            props.messages[index].sender._id ===
              props.messages[index + 1].sender._id &&
            curDate === nextDate
          ) {
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
            <React.Fragment key={message._id}>
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
              {curDate !== nextDate && (
                <Divider
                  sx={{
                    "&::before, &::after": {
                      position: "static",
                      borderColor: "gray",
                    },
                  }}
                  variant="middle"
                >
                  <Chip
                    label={curDate}
                    sx={{ color: "whitesmoke", fontSize: "10px" }}
                  />
                </Divider>
              )}
            </React.Fragment>
          );
        })}
    </Wrapper>
  );
};

export default connect((state) => {
  return state.chat;
})(Messages);
