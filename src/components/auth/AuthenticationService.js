import axios from "axios";
import { executeAuthenticationApi } from "../../apis/Endpoints";

const SESSION_ATTRIBUTE_KEY = "authenticatedUser";

function AuthenticationService() {
  function createToken(token) {
    return "Bearer " + token;
  }

  function executeAuthentication(username, password) {
    return executeAuthenticationApi(username, password);
  }

  function successfulLogin(username, token) {
    console.log("Successful login!");
    sessionStorage.setItem(SESSION_ATTRIBUTE_KEY, username);
    setupAxiosInterceptors(createToken(token));
  }

  function logout() {
    console.log("Successful logout!");
    sessionStorage.removeItem(SESSION_ATTRIBUTE_KEY);
  }

  function isUserLoggedIn() {
    let user = sessionStorage.getItem(SESSION_ATTRIBUTE_KEY);
    if (user === null) {
      return false;
    }
    return true;
  }

  function getLoggedInUser() {
    let user = sessionStorage.getItem(SESSION_ATTRIBUTE_KEY);
    if (user === null) {
      return "";
    }
    return user;
  }

  function setupAxiosInterceptors(token) {
    axios.interceptors.request.use((config) => {
      if (isUserLoggedIn()) {
        config.headers.authorization = token;
      }
      return config;
    });
  }

  return {
    executeAuthentication,
    successfulLogin,
    logout,
    isUserLoggedIn,
    getLoggedInUser,
  };
}

export default AuthenticationService;
