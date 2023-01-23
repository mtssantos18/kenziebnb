import axios from "axios";

const api = axios.create({
  baseURL: "https://kenziebnb-api.onrender.com/",
  timeout: 15000,
});

export default api;
