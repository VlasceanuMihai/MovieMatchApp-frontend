import axios from "axios";

export const BASE_API = "http://localhost:8080/movieMatch";

/* POST */
// Authenticate endpoint
export const executeAuthenticationApi = async (username, password) => {
  return await axios.post(`${BASE_API}/authenticate`, { username, password });
};

// Register endpoint
export const signUpApi = async (data) => {
  return await axios.post(`${BASE_API}/api/v1/registration`, data);
};

/* GET */
// 

// Get movies endpoint
export const getMovies = async () => {
  return await axios.get(`${BASE_API}/api/v1/movies`);
};


