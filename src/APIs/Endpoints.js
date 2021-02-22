import React from "react";
import axios from "axios";

export const BASE_API = "http://localhost:8080";

// Sign-up API
export const signUpApi = (data) =>
  axios.post(`${BASE_API}/api/v1/registration`, data);

// Get movies
export const movies = () => {
  axios.get(`${BASE_API}/api/v1/movies`);
};
