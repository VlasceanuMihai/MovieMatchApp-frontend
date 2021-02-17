import React from "react";
import axios from "axios";

export const BASE_API = "http://localhost:8080";

// Sign-up API
export const signUp = () => `${BASE_API}/api/v1/registration`;
