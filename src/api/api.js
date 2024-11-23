import axios from "axios";

const BASE = 'https://1ff9-191-240-61-82.ngrok-free.app/api/';

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