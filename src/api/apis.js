
import axios from 'axios';

// Get the base URL from the environment variables
const BASE_URL = import.meta.env.VITE_API_URL
console.log(BASE_URL)

// Create an Axios instance with the base URL
const apis = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apis;
