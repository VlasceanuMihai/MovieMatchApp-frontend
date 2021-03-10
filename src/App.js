import "./App.css";
import { Route, Switch } from "react-router-dom";
import SignUpComponent from "./components/auth/SignUpComponent";
import LoginComponent from "./components/auth/LoginComponent";
import Movies from "./components/menu/Movies";
import Dashboard from "./components/menu/Dashboard";
import ErrorComponent from "./components/error-handler/ErrorComponent";
import LogoutComponent from "./components/auth/LogoutComponent";
import AuthenticatedRoute from "./components/auth/AuthenticatedRoute";
import SettingsComponent from "./components/settings/SettingsComponent";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" exact component={SignUpComponent} />
        <Route path="/register" exact component={SignUpComponent} />
        <Route path="/login" exact component={LoginComponent} />
        <Route path="/" exact component={LoginComponent} />
        <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
        <AuthenticatedRoute path="/dashboard" exact component={Dashboard} />
        <AuthenticatedRoute path="/movies" exact component={Movies} />
        <AuthenticatedRoute
          path="/updatePassword"
          exact
          component={SettingsComponent}
        />
        <Route component={ErrorComponent} />
      </Switch>
    </div>
  );
}

export default App;
