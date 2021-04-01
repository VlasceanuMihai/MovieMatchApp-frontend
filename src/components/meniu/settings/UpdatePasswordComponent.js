import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
});

const UpdatePasswordComponent = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: [event.target.value],
    });
  }

  function handleSubmit(event) {
    setValues({});
  }

  return (
    <form className={clsx(classes.root, className)} {...rest}>
      <Card>
        <CardHeader title="Update password" />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            id="password"
            name="password"
            type="password"
            label="Password"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            value={values.password || ""}
          />
          <TextField
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm password"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            value={values.confirmPassword || ""}
          />
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};

UpdatePasswordComponent.propTypes = {
  className: PropTypes.string,
};

export default UpdatePasswordComponent;
