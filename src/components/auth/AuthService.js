import axios from "axios";

function AuthService() {
  function successfulLogin(username, password) {
    console.log("Successful login!");
    sessionStorage.setItem("authenticatedUser", username);
    setupAxiosInterceptors();
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

  function setupAxiosInterceptors() {
    const USERNAME = "mihai";
    const PASSWORD = "parola";
    let basicAuthHeader = "Basic " + window.btoa(USERNAME + ":" + PASSWORD);

    axios.interceptors.request.use((config) => {
      if (isUserLoggedIn()) {
        config.headers.authorization = basicAuthHeader;
      }
      return config;
    });
  }

  return {
    successfulLogin,
    logout,
    isUserLoggedIn,
  };
}

export default AuthService;
