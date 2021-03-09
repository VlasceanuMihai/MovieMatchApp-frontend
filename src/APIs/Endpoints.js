import axios from "axios";

const USERNAME = "mihai";
const PASSWORD = "parola";
export const BASE_API = "http://localhost:8080/movieMatch";
let basicAuthHeader = "Basic " + window.btoa(USERNAME + ":" + PASSWORD);

// Sign-up API
export const signUpApi = (data) => {
  return axios.post(`${BASE_API}/api/v1/registration`, data);
};

// Get movies
export const getMovies = () => {
  return axios.get(`${BASE_API}/api/v1/movies`, {
    headers: {
      authorization: basicAuthHeader,
    },
  });
};
