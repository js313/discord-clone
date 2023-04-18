import React from "react";
import { styled } from "@mui/system";
import Sidebar from "../components/Sidebar";
import FriendsSidebar from "../components/FriendsSidebar";
import Messenger from "../components/Messenger";
import AppBar from "../components/AppBar";

const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
}));

const Dashboard = () => {
  return (
    <Wrapper>
      <Sidebar />
      <FriendsSidebar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

export default Dashboard;
