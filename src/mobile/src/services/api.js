import axios from 'axios';

const api = axios.create({
  baseURL: "http://172.20.10.12:8080/api",
});

export default api;