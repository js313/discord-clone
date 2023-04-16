import React, { useState } from "react";
import AuthBox from "../components/AuthBox";
import { Button, Container, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { getActions } from "../app/actions/authActions";
import { useNavigate } from "react-router-dom"

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault();
    props.login({ email, password }, navigate)
  }

  return (
    <>
      <AuthBox>
        <h1 style={{ marginBottom: "40px" }}>Login</h1>
        {/* Create a login form */}
        <Container component="form" onSubmit={handleLogin}>
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
                onChange={(event) => setEmail(event.target.value)}
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
                onChange={(event) => setPassword(event.target.value)}
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

export default connect(null, (dispatch) => { return { ...getActions(dispatch) } })(Login);  //passes all actions as props
