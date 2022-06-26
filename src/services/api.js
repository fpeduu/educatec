import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.portalmec.c3sl.ufpr.br/v1/learning_objects',
});

export default api;