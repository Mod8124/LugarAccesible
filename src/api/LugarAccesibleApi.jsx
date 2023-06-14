import axios from 'axios';
import { environment } from '../settings/environment';

const URLS = {
  development: {
    local: environment.HOST,
  },
  production: {
    railway: environment.HOST,
  },
};

const LugarAccesibleApi = axios.create({
  baseURL: URLS.production.railway,
  withCredentials: true,
});

export default LugarAccesibleApi;
