import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const BoxWrapper = styled("div")(({ theme }) => ({
  //setup dark theme
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
  backgroundColor: "#2f3136",
  color: "#8f9f9f",
}));

const AuthBox = (props) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          maxWidth: 400,
          height: 400,
          bgcolor: "#36393f",
          borderRadius: "20px",
          boxShadow: "10px 30px 30px 10px rgb(0 0 0 / 30%)",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        {props.children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;
