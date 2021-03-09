import axios from "axios";
import { executeBasicAtuhApi } from "../../apis/Endpoints";

function AuthService() {
  function createBasicAuthHeader(username, password) {
    return "Basic " + window.btoa(username + ":" + password);
  }

  function executeBasicAtuh(username, password) {
    return executeBasicAtuhApi(createBasicAuthHeader(username, password));
  }

  function successfulLogin(username, password) {
    console.log("Successful login!");
    sessionStorage.setItem("authenticatedUser", username);
    setupAxiosInterceptors(createBasicAuthHeader(username, password));
  }

  function logout() {
    console.log("Successful logout!");
    sessionStorage.removeItem("authenticatedUser");
  }

  function isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) {
      return false;
    }
    return true;
  }

  function getLoggedInUser() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) {
      return "";
    }
    return user;
  }

  function setupAxiosInterceptors(basicAuthHeader) {
    axios.interceptors.request.use((config) => {
      if (isUserLoggedIn()) {
        config.headers.authorization = basicAuthHeader;
      }
      return config;
    });
  }

  return {
    executeBasicAtuh,
    successfulLogin,
    logout,
    isUserLoggedIn,
    getLoggedInUser,
  };
}

export default AuthService;
