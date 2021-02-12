import React from "react";
import { useState } from "react";
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
}));

function SignUp() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(
    new Date(Date().toLocaleString())
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="firstName"
                variant="standard"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="lastName"
                variant="standard"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                type="lastName"
              />
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
              />
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
              />
            </Grid>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item xs={12} container direction="column" justify="flex">
                <KeyboardDatePicker
                  id="dateOfBirth"
                  label="Date of birth"
                  value={selectedDate}
                  onChange={handleDateChange}
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
              />
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
              />
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
              />
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
              />
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
            type="signup"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://movie-match.com/">
        Movie Match
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default SignUp;
