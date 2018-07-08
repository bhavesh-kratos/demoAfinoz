import axios from 'axios';
const API_BASE_URL = 'http://api.github.com';

const instance = axios.create({
  baseURL: API_BASE_URL,
});
// instance.defaults.headers.common.authorization = ``;

export default instance;


