import React from "react";
import AuthBox from "../components/AuthBox";
import { Container, Grid, TextField } from "@mui/material";

const Login = () => {
  return (
    <div>
      <AuthBox>
        <h1>Login</h1>
        {/* Create a login form */}
        <Container component="form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="standard"
                fullWidth
              />
            </Grid>
          </Grid>
        </Container>
      </AuthBox>
    </div>
  );
};

export default Login;
