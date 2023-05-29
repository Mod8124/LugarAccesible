import axios from 'axios';

const URLS = {
  development: {
    local: 'http://localhost:3000/api/v1/',
  },
  production: {
    donweb: 'https://vps-3308549-x.dattaweb.com/api/v1',
    azure: 'https://devathon-api.azurewebsites.net/',
  },
};

const LugarAccesibleApi = axios.create({
  baseURL: URLS.development.local,
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
