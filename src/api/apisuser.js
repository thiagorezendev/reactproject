import axios from "axios";

const BASE_URL_USER = 'http://localhost:8085';

const URI = 'login';

const token = window.localStorage.getItem('token');

const user = axios.create({
    baseURL: BASE_URL_USER,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'Application/json',
      Accept: 'Application/json',
    },
  });

  export const login = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL_USER}/login`, { email, password });
        return response.data; // Retorna mensagem de sucesso ou falha
    } catch (error) {
        throw new Error(error.response.data);
    }
};

export default user;