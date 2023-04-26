import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  marginTop: "48px",
  flexDirection: "column",
}));

const MessageContent = (props) => {
  useEffect(() => {}, [props.details]);
  return (
    <Wrapper>
      <Messages details={props.details} />
      <div style={{ height: "12px" }} />
      <MessageInput />
    </Wrapper>
  );
};

export default MessageContent;
