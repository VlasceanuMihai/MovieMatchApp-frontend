import axios from "axios";

export const BASE_API = "http://localhost:8080/movieMatch";

export const executeBasicAtuhApi = async (basicAuthHeader) => {
  return await axios.get(`${BASE_API}/api/v1/basicAuth`, {
    headers: { authorization: basicAuthHeader },
  });
};

// Sign-up API
export const signUpApi = async (data) => {
  return await axios.post(`${BASE_API}/api/v1/registration`, data);
};

// Get movies
export const getMovies = async () => {
  return await axios.get(`${BASE_API}/api/v1/movies`);
};
