import React from "react";
import axios from "axios";

export const BASE_API = "http://localhost:8080";

const signUpHeaders = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

// Sign-up API
export const signUpApi = (data) =>
  axios.post(`${BASE_API}/api/v1/registration`, data, signUpHeaders);
