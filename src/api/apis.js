import axios from './baseUrl';

export const apiData = username => axios.get(`/users/${username}/repos`).then(res => res.data);

