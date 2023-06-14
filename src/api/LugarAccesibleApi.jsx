import axios from 'axios';
import { environment } from '../settings/environment';

const URLS = {
  development: {
    local: environment.HOST,
  },
  production: {
    railway: 'https://lugaraccesible-back-production.up.railway.app/api/v1/',
  },
};

const LugarAccesibleApi = axios.create({
  baseURL: URLS.production.railway,
  withCredentials: true,
});

export default LugarAccesibleApi;
