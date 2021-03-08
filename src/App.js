import "./App.css";
import { Route, Switch } from "react-router-dom";
import SignUpComponent from "./components/auth/SignUpComponent";
import LoginComponent from "./components/auth/LoginComponent";
import Movies from "./components/menu/Movies";
import Dashboard from "./components/menu/Dashboard";
import ErrorComponent from "./components/error-handler/ErrorComponent";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" exact component={SignUpComponent} />
        <Route path="/register" exact component={SignUpComponent} />
        <Route path="/login" exact component={LoginComponent} />
        <Route path="/" exact component={LoginComponent} />
        <Route path="/dashboard/:name" exact component={Dashboard} />
        <Route path="/movies" exact component={Movies} />
        <Route component={ErrorComponent} />
      </Switch>
    </div>
  );
}

export default App;
