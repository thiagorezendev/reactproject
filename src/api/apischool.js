import axios from "axios";

const BASE_URL_SCHOOL = 'http://localhost:8082';

const URI = 'login';

const token = window.localStorage.getItem('token');

const school = axios.create({
    baseURL: BASE_URL_SCHOOL,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'Application/json',
      Accept: 'Application/json',
    },
  });

export default school;