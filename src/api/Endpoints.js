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

// Add movie
export const addMovieApi = async (movie) => {
  return await axios.post(`${BASE_API}/api/v1/users/addMovie`, movie)
}

/* GET */
// User profile
export const profileApi = async () => {
  return await axios.get(`${BASE_API}/api/v1/users/profile`);
};

// Get watchlist
export const getWatchlistApi = async () => {
  return await axios.get(`${BASE_API}/api/v1/watchlist`)
}

// Get movies endpoint
export const getMoviesApi = async () => {
  return await axios.get(`${BASE_API}/api/v1/movies`);
};
