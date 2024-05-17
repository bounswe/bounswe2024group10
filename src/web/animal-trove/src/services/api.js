import axios from "axios";

const api = axios.create({
  // baseURL: "http://165.22.95.135:8080/api",
  baseURL: "http://localhost:8080/api",
});

export default api;
