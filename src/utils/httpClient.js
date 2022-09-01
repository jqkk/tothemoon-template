import axios from 'axios';

export const client = axios.create();

export const requestGet = async (url) => {
  const response = await client.get(url);
  return response.data;
};
