import axios from 'axios';

// baseURL for android simulator: 10.0.2.2:3000
// baseURL for genymotion: 10.0.3.2:3000

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export default api;
