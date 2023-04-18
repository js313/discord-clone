import React from "react";
import { styled } from "@mui/system";
import MainPageButton from "./MainPageButton";

const Wrapper = styled("div")(({ theme }) => ({
  width: "72px",
  height: "100%",
  backgroundColor: "#202225",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const Sidebar = () => {
  return (
    <Wrapper>
      <MainPageButton />
    </Wrapper>
  );
};

export default Sidebar;
