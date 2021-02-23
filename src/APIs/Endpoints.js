import React from "react";
import axios from "axios";

export const BASE_API = "http://localhost:8080/movieMatch";

// Sign-up API
export const signUpApi = (data) => {
  return axios.post(`${BASE_API}/api/v1/registration`, data);
};

// Get movies
export const getMovies = () => {
  return axios.get(`${BASE_API}/api/v1/movies`);
};

export const getAllTodos = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos`);
};
