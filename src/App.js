import "./App.css";
import { Route } from "react-router-dom";
import SignUpComponent from "./components/auth/SignUpComponent";
import LoginComponent from "./components/auth/LoginComponent";

function App() {
  return (
    <div className="App">
      <Route path="/signup" exact component={SignUpComponent} />
      <Route path="/register" exact component={SignUpComponent} />
      <Route path="/login" exact component={LoginComponent} />
      <Route path="/" exact component={LoginComponent} />
    </div>
  );
}

export default App;
