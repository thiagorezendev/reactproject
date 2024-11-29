import axios from "axios";

const BASE = 'http://localhost:8080';

const URI = 'login';

const token = window.localStorage.getItem('token');

const api = axios.create({
    baseURL: BASE,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'Application/json',
      Accept: 'Application/json',
    },
  });

export default api;