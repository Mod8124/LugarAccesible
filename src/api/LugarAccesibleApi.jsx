import axios from 'axios';

const URLS = {
  development: {
    local: 'http://localhost:3000/',
  },
  production: {
    donweb: 'https://vps-3308549-x.dattaweb.com/',
    azure: 'https://devathon-api.azurewebsites.net/',
  },
};

const LugarAccesibleApi = axios.create({
  baseURL: URLS.production.donweb,
});

LugarAccesibleApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    'Content-Type': 'application/json',
    Authorization: 'bearer ' + sessionStorage.getItem('jwt'),
  };

  return config;
});

export default LugarAccesibleApi;
