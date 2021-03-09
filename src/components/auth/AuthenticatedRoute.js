import React from "react";
import AuthService from "./AuthService";
import { Route, Redirect } from "react-router-dom";

function AuthenticatedRoute(props) {
  const { isUserLoggedIn } = AuthService();

  if (isUserLoggedIn()) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
}

export default AuthenticatedRoute;
