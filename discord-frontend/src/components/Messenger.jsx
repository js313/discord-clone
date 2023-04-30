import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import WelcomeMessage from "./WelcomeMessage";
import MessageContent from "./MessageContent";

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  backgroundColor: "#36393F",
  marginTop: "48px",
}));

const Messenger = (props) => {
  return (
    <Wrapper>
      {!props.chatDetails && !props.groupDetails ? (
        <WelcomeMessage />
      ) : (
        <MessageContent details={props.chatDetails} />
      )}
    </Wrapper>
  );
};

export default connect((state) => {
  return state.chat;
})(Messenger);
