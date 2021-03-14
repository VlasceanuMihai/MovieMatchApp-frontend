import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutReset } from "../../redux/actions/userActions";
import {
  executeAuthenticationApi,
  profileApi,
  getWatchlistApi,
} from "../../apis/Endpoints";

const USER_TOKEN = "user_token";

function AuthenticationService() {
  const history = useHistory();
  const dispatch = useDispatch();

  function createToken(token) {
    let userToken = "Bearer " + token;
    return userToken;
  }

  function executeAuthentication(username, password) {
    return executeAuthenticationApi(username, password);
  }

  function successfulLogin(username, token) {
    console.log("Successful login!");
    sessionStorage.setItem(USER_TOKEN, createToken(token));
    setupAxiosInterceptors();
  }

  function logout() {
    console.log("Successful logout!");
    sessionStorage.removeItem(USER_TOKEN);
    dispatch(logoutReset());
    history.push("/login");
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

  function getProfile() {
    setupAxiosInterceptors();
    return profileApi();
  }

  function getWatchlist() {
    setupAxiosInterceptors();
    return getWatchlistApi();
  }

  return {
    executeAuthentication,
    successfulLogin,
    logout,
    isUserLoggedIn,
    getLoggedInUser,
    setupAxiosInterceptors,
    getProfile,
    getWatchlist,
  };
}

export default AuthenticationService;
