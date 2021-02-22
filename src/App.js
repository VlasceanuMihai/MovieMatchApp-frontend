import "./App.css";
import { Route } from "react-router-dom";
import SignUpComponent from "./components/auth/SignUpComponent";
import LoginComponent from "./components/auth/LoginComponent";
import Movies from "./components/menu/Movies";
import Dashboard from "./components/menu/Dashboard";

function App() {
  return (
    <div className="App">
      <Route path="/signup" exact component={SignUpComponent} />
      <Route path="/register" exact component={SignUpComponent} />
      <Route path="/login" exact component={LoginComponent} />
      <Route path="/" exact component={LoginComponent} />
      <Route path="/home" exact component={Dashboard} />
      <Route path="/movies" exact component={Movies} />
    </div>
  );
}

export default App;
