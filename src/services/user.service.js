import axios from "axios";
import authHeader from "./auth-header";
import authService from "./auth.service";

const BASE_API_URL = "http://localhost:8080/api";

const getUserContent = () => {
  return axios.get(BASE_API_URL + "/podcasts", { headers: authHeader() });
};

const isAuth = () => {
  if (authService.getCurrentUser() !== null) {
    return true;
  } else {
    return false;
  }
};

export default {
  getUserContent,
  isAuth,
};
