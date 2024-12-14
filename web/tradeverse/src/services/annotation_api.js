import axios from "axios";

const annotation_api = axios.create({
    baseURL: "http://35.246.188.121:8081/api",
});

export default annotation_api;