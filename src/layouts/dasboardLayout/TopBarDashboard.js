import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import AuthenticationService from "../../components/auth/AuthenticationService";
import Logo from "../../utils/Logo";

const useStyles = makeStyles(() => ({
  root: {},
  toolbar: {
    height: 64,
    background: "#546e7a",
  },
  avatar: {
    width: 60,
    height: 60,
  },
}));

const TopBarDashboard = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const history = useHistory();
  const { logout } = AuthenticationService();
  const [notifications] = useState([]);

  async function handleLogout() {
    logout();
    history.push("/login");
  }

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/dashboard">
          <Logo />
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge badgeContent={notifications.length} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={handleLogout}>
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBarDashboard.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBarDashboard;
