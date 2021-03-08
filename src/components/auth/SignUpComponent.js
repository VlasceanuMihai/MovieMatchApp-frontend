import React from "react";
import useForm from "./useForm";
import CopyrightComponent from "../copyright/CopyrightComponent";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
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
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: "#546e7a",
  },
  date: {
    color: "red",
    backgroundColor: "#546e7a",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
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

function SignUp() {
  const classes = useStyles();

  const {
    user,
    dateOfBirth,
    handleChange,
    setDateOfBirth,
    handleSubmit,
    submitting,
  } = useForm(signUp);

  function signUp() {
    console.log("No errors, submit callback called!");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="firstName"
                variant="standard"
                id="firstName"
                name="firstName"
                label="First Name"
                autoFocus
                required
                fullWidth
                // noValidate
                value={user.firstName || ""}
                onChange={handleChange}
              />
              {user.errors.firstName}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="lastName"
                variant="standard"
                id="lastName"
                name="lastName"
                label="Last Name"
                required
                fullWidth
                value={user.lastName || ""}
                onChange={handleChange}
              />
              {user.errors.lastName}
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="email"
                variant="standard"
                required
                fullWidth
                id="email"
                name="email"
                label="Email"
                type="email"
                value={user.email || ""}
                onChange={handleChange}
              />
              {user.errors.email}
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="current-password"
                variant="standard"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={user.password || ""}
                onChange={handleChange}
              />
              {user.errors.password}
            </Grid>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item xs={12} container direction="column" justify="center">
                <KeyboardDatePicker
                  // className={classes.datePicker}
                  id="dateOfBirth"
                  name="dateOfBirth"
                  label="Date of birth"
                  required
                  value={dateOfBirth}
                  onChange={(val) => {
                    setDateOfBirth(val);
                  }}
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <Grid item xs={12}>
              <TextField
                autoComplete="mobilenumber"
                variant="standard"
                required
                fullWidth
                id="mobileNumber"
                name="mobileNumber"
                label="Mobile Number"
                type="mobileNumber"
                value={user.mobileNumber || ""}
                onChange={handleChange}
              />
              {user.errors.mobileNumber}
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="addressLine"
                variant="standard"
                required
                fullWidth
                id="addressLine"
                name="addressLine"
                label="Address Line"
                type="addressLine"
                value={user.addressLine || ""}
                onChange={handleChange}
              />
              {user.errors.addressLine}
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="city"
                variant="standard"
                required
                fullWidth
                id="city"
                name="city"
                label="City"
                type="city"
                value={user.city || ""}
                onChange={handleChange}
              />
              {user.errors.city}
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="country"
                variant="standard"
                required
                fullWidth
                id="country"
                name="country"
                label="Country"
                type="country"
                value={user.country || ""}
                onChange={handleChange}
              />
              {user.errors.country}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Accept terms and conditions."
              />
            </Grid>
          </Grid>
          <Button
            className={classes.submit}
            id="signup"
            name="signup"
            type="signup"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2" color="textPrimary">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>

          <Grid>
            <Typography className={classes.errors}>{submitting}</Typography>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <CopyrightComponent />
      </Box>
    </Container>
  );
}

export default SignUp;
