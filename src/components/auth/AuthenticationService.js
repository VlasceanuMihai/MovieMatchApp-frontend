import axios from "axios";
import { executeAuthenticationApi } from "../../apis/Endpoints";

// const SESSION_ATTRIBUTE_KEY = "authenticated_user";
const USER_TOKEN = "user_token";

function AuthenticationService() {
  function createToken(token) {
    let userToken = "Bearer " + token;
    return userToken;
  }

  function executeAuthentication(username, password) {
    return executeAuthenticationApi(username, password);
  }

  function successfulLogin(username, token) {
    console.log("Successful login!");
    // sessionStorage.setItem(SESSION_ATTRIBUTE_KEY, username);
    // let userToken = createToken(token);
    sessionStorage.setItem(USER_TOKEN, createToken(token));
    setupAxiosInterceptors();
  }

  function logout() {
    console.log("Successful logout!");
    // sessionStorage.removeItem(SESSION_ATTRIBUTE_KEY);
    sessionStorage.removeItem(USER_TOKEN);
  }

  function isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_TOKEN);
    if (user === null) {
      return false;
    }
    return true;
  }

  function getLoggedInUser() {
    let user = sessionStorage.getItem(USER_TOKEN);
    if (user === null) {
      return "";
    }
    return user;
  }

  function setupAxiosInterceptors() {
    axios.interceptors.request.use((config) => {
      if (isUserLoggedIn()) {
        config.headers.authorization = sessionStorage.getItem(USER_TOKEN);
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
    setupAxiosInterceptors,
  };
}

export default AuthenticationService;
