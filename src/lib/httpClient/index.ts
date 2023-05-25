import axios from "axios";
import { BASE_API_KEY, BASE_API_URL } from "../../constants/index";

export const apiClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: { api: BASE_API_KEY }
});


// TODO: Add interceptors for failed HTTP requests