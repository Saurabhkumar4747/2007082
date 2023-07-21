// src/api.js
import axios from 'axios';

const BASE_URL = 'https://api.johndoerailways.com'; // Replace with the actual API base URL
const ACCESS_TOKEN = 'your_access_token_here'; // Replace with your access token

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export const getAllTrains = () => api.get('/trains');
export const getTrainById = (trainId) => api.get(`/trains/${trainId}`);