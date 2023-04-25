import React, { useState } from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import { getActions } from "../app/actions/chatActions";
import { sendDirectMessage } from "../socket/connection";

const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "60px",
}));

const Input = styled("input")(({ theme }) => ({
  width: "100%",
  height: "100%",
  border: "none",
  outline: "none",
  backgroundColor: "#40444B",
  color: "#DCDDDE",
  padding: "0 12px",
  fontSize: "16px",
  "&::placeholder": {
    color: "#72767D",
  },
}));

const MessageInput = (props) => {
  const [message, setMessage] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && message) {
      sendDirectMessage({
        receiverId: props.chatDetails.id,
        content: message,
      });
      setMessage("");
    }
  };

  return (
    <Wrapper>
      <Input
        placeholder={`Message ${props.chatDetails.username}`}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={handleKeyPress}
      />
    </Wrapper>
  );
};

export default connect(
  (state) => state.chat,
  (dispatch) => {
    return { ...getActions(dispatch) };
  }
)(MessageInput);
