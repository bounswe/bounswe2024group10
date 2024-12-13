import axios from "axios";

const annotation_api = axios.create({
    baseURL: "http://localhost:8081/api",
});

export default annotation_api;