import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Sidebar from "../components/Sidebar";
import FriendsSidebar from "../components/FriendsSidebar";
import Messenger from "../components/Messenger";
import AppBar from "../components/AppBar";
import { useNavigate } from "react-router-dom";
import { getActions } from "../app/actions/authActions";
import { connect } from "react-redux";
import { connectToSocket } from "../socket/connection";

const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
}));

const Dashboard = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    } else {
      props.setUserDetails(user); //if signed in user refreshes or directly goes to dashboard, then user details are set in redux store
      connectToSocket(user);
    }
  }, [navigate, props]);
  return (
    <Wrapper>
      <Sidebar />
      <FriendsSidebar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

export default connect(null, (dispatch) => {
  return { ...getActions(dispatch) };
})(Dashboard);
