import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import SignUpComponent from "./components/auth/SignUpComponent";
import LoginComponent from "./components/auth/LoginComponent";
import ErrorComponent from "./components/error-handler/ErrorComponent";
import AuthenticatedRoute from "./components/auth/AuthenticatedRoute";
import DashboardLayout from "./layouts/dasboardLayout/DashboardLayout";
import SettingsComponent from "./components/menu/settings/SettingsComponent";
import MoviesComponent from "./components/menu/movies/MoviesComponent";
import "react-perfect-scrollbar/dist/css/styles.css";
import DashboardComponent from "./components/menu/dashboard/DashboardComponent";

const App = withRouter(({ location }) => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/404" component={ErrorComponent} />
        <Route>
          {location.pathname !== `/login` &&
            location.pathname !== `/` &&
            location.pathname !== `/signup` &&
            location.pathname !== `/register` && <DashboardLayout />}
          <Switch>
            <Route path="/signup" exact component={SignUpComponent} />
            <Route path="/register" exact component={SignUpComponent} />
            <Route path="/login" exact component={LoginComponent} />
            <Route path="/" exact component={LoginComponent} />
            <AuthenticatedRoute
              path="/dashboard"
              exact
              component={DashboardComponent}
            />
            <AuthenticatedRoute
              path="/movies"
              exact
              component={MoviesComponent}
            />
            <AuthenticatedRoute
              path="/settings"
              exact
              component={SettingsComponent}
            />
            <Redirect to="/404" />
          </Switch>
        </Route>
      </Switch>
    </div>
  );
});

export default App;
