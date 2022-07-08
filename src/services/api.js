import axios from "axios";

const api = axios.create({
  baseURL: "https://api-kenziebnb.herokuapp.com",
  timeout: 15000,
});

export default api;
