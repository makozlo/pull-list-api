import axios from 'axios';

export const marvelAPI = axios.create({
  baseURL: process.env.MARVEL_BASEURL
});
