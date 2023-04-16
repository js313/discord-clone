import React, { useState } from "react";
import AuthBox from "../components/AuthBox";
import { Button, Container, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getActions } from "../app/actions/authActions";
import { useNavigate } from "react-router-dom"

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleRegister = (event) => {
    event.preventDefault()
    props.register({
      username,
      email,
      password
    }, navigate)
  }

  return (
    <>
      <AuthBox>
        <h1 style={{ marginBottom: "40px" }}>Register</h1>
        {/* Create a register form */}
        <Container component="form" onSubmit={handleRegister}>
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
                onChange={(event) => setUsername(event.target.value)}
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
                onChange={(event) => setEmail(event.target.value)}
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
                onChange={(event) => setPassword(event.target.value)}
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

export default connect(null, (dispatch) => { return { ...getActions(dispatch) } })(Register);
