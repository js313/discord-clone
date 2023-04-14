import React, { useState } from "react";
import AuthBox from "../components/AuthBox";
import { Button, Container, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <AuthBox>
        <h1 style={{ marginBottom: "40px" }}>Login</h1>
        {/* Create a login form */}
        <Container component="form">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                inputProps={{
                  style: { color: "white" },
                }}
              />
            </Grid>
            <Grid item xs={12} color="white">
              <TextField
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                inputProps={{
                  style: { color: "white" },
                }}
              />
            </Grid>
            <Grid item xs={2} color="white">
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "GrayText" }}
              >
                Submit
              </Button>
            </Grid>
            {/* Make a create a new account link */}
            <Grid item xs={10}>
              <p style={{ textAlign: "right" }}>
                Don't have an account?{" "}
                <Link
                  to="/register"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Register
                </Link>
              </p>
            </Grid>
          </Grid>
        </Container>
      </AuthBox>
    </>
  );
};

export default Login;
