import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";
import CopyrightComponent from "../copyright/CopyrightComponent";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 18),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: "#546e7a",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: "#546e7a",
    color: "#FFF",
    "&:hover": {
      backgroundColor: "#78909c",
      color: "#FFF",
    },
  },
  errors: {
    color: "red",
  },
}));

function LoginComponent() {
  const classes = useStyles();
  const { executeAuthentication, successfulLogin } = AuthenticationService();
  let history = useHistory();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    hasLoginFailed: false,
    showSuccessMessage: false,
  });

  useEffect(() => {});

  function handleChange(event) {
    event.preventDefault();

    setUserData((userData) => ({
      ...userData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    executeAuthentication(userData.email, userData.password)
      .then((response) => {
        console.log("response.data.token: ", response.data.token);
        successfulLogin(userData.email, response.data.token);
        history.push("/dashboard");
        setUserData({
          email: "",
          password: "",
          hasLoginFailed: false,
          showSuccessMessage: true,
        });
      })
      .catch((error) => {
        console.log("Invalid credentials.");
        setUserData({
          email: "",
          password: "",
          hasLoginFailed: true,
          showSuccessMessage: false,
        });
      });
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              variant="standard"
              margin="normal"
              required
              fullWidth
              autoComplete="email"
              autoFocus
              value={userData.email}
              onChange={handleChange}
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              variant="standard"
              margin="normal"
              required
              fullWidth
              autoComplete="current-password"
              value={userData.password}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              className={classes.submit}
              id="login"
              name="login"
              type="login"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="textPrimary">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs>
                <Link href="/signup" variant="body2" color="textPrimary">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Grid>
              {userData.hasLoginFailed && (
                <div className="alert alert-warning">
                  Invalid username/password
                </div>
              )}
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <CopyrightComponent />
        </Box>
      </Grid>
    </Grid>
  );
}

export default LoginComponent;
