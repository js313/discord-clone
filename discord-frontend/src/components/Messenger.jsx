import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  backgroundColor: "#36393F",
  marginTop: "48px",
}));

const Messenger = () => {
  return <Wrapper>Messenger</Wrapper>;
};

export default Messenger;
