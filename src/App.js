import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUpComponent from "./components/auth/SignUpComponent";
import LoginComponent from "./components/auth/LoginComponent";
import ErrorComponent from "./components/error-handler/ErrorComponent";
import LogoutComponent from "./components/auth/LogoutComponent";
import AuthenticatedRoute from "./components/auth/AuthenticatedRoute";
import DashboardLayout from "./layouts/dasboardLayout/DashboardLayout";
import SettingsComponent from "./components/menu/settings/SettingsComponent";
import Toolbar from "./components/menu/movies/Toolbar";
import MoviesComponent from "./components/menu/movies/MoviesComponent";
import "react-perfect-scrollbar/dist/css/styles.css";
import NavBar from "./layouts/dasboardLayout/navbar/NavBar";
import TopBarDashboard from "./layouts/dasboardLayout/TopBarDashboard";
function App() {
  return (
    <div className="App">
      <Router>
        <DashboardLayout />
        <Switch>
          <Route path="/signup" exact component={SignUpComponent} />
          <Route path="/register" exact component={SignUpComponent} />
          <Route path="/login" exact component={LoginComponent} />
          <Route path="/" exact component={LoginComponent} />
          <AuthenticatedRoute path="/test" exact component={TopBarDashboard} />
          <AuthenticatedRoute
            path="/dashboard"
            exact
            component={DashboardLayout}
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
          <Route exact component={ErrorComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
