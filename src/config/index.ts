import axios from "axios";
export const baseUrl = axios.create({
  baseURL: "http://127.0.0.1:4010",
  headers: {
    "Content-Type": "application/json",
  },
});
