import axios from "axios";
import configFile from "../config.json";

const api = axios.create({ baseURL: configFile.apiEndpoint });

api.interceptors.request.use(
  function (config) {
    if (config.url) {
      config.url = config.url + ".json";
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const apiService = {
  get: api.get,
};

export default apiService;