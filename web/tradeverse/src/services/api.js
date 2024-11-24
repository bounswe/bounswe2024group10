import axios from "axios";

const api = axios.create({
    baseURL: "http://35.246.188.121:8080/api",
});

export default api;