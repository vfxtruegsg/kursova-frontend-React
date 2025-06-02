import axios from 'axios';

export const baseURL = axios.create({
  baseURL: 'http://localhost:3000',
});

export const setAuthHeader = (token) => {
  baseURL.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const deleteAuthHeader = () => {
  delete baseURL.defaults.headers.common.Authorization;
};
