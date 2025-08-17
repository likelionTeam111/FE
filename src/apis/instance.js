import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
  },
});
