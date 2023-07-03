import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key

const api = axios.create({
  baseURL: 'https://www.omdbapi.com',
});

export const searchMovies = async (query) => {
  try {
    const response = await api.get('/', {
      params: {
        apikey: API_KEY,
        s: query,
      },
    });
    return response.data.Search;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await api.get('/', {
      params: {
        apikey: API_KEY,
        i: id,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting movie details:', error);
    return null;
  }
};
