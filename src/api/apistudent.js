import axios from "axios";

const BASE_URL_STUDENT = 'http://localhost:8081';

const URI = 'login';

const token = window.localStorage.getItem('token');

const student = axios.create({
    baseURL: BASE_URL_STUDENT,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'Application/json',
      Accept: 'Application/json',
    },
  });

export default student;