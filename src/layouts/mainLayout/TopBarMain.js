import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import Logo from "../../utils/Logo";

const useStyles = makeStyles({
  root: {},
  toolbar: {
    height: 64,
    background: "#546e7a",
  },
});

const TopBarMain = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/oldDashboard">
          <Logo />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

TopBarMain.propTypes = {
  className: PropTypes.string,
};

export default TopBarMain;