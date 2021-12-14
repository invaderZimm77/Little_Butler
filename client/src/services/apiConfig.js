import axios from "axios";

const baseUrl = "https://lil-butler-api.herokuapp.com/";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
