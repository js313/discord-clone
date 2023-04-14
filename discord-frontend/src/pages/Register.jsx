import React, { useState } from "react";
import AuthBox from "../components/AuthBox";
import { Button, Container, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <AuthBox>
        <h1 style={{ marginBottom: "40px" }}>Register</h1>
        {/* Create a register form */}
        <Container component="form">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="username"
                name="username"
                label="User Name"
                variant="outlined"
                type="text"
                fullWidth
                inputProps={{
                  style: { color: "white" },
                }}
              />
            </Grid>
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
            <Grid item xs={12}>
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
            <Grid item xs={2}>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "GrayText" }}
              >
                Submit
              </Button>
            </Grid>
            {/* Make a aready have an account link */}
            <Grid item xs={10}>
              <p style={{ textAlign: "right" }}>
                Already have an account?{" "}
                <Link
                  to="/login"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Login
                </Link>
              </p>
            </Grid>
          </Grid>
        </Container>
      </AuthBox>
    </>
  );
};

export default Register;
