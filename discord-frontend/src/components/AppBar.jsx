import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  right: 0,
  top: 0,
  height: "48px",
  borderBottom: "1px solid black",
  display: "flex",
  backgroundColor: "#36393F",
  width: "calc(100% - 326px)",
  justifyContent: "space-between",
  padding: "0 15px",
}));

const AppBar = () => {
  return <Wrapper>AppBar</Wrapper>;
};

export default AppBar;
