import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://www.omdbapi.com/?s=star wars&apikey=YOUR_API_KEY'
        );
        const data = response.data.Search;
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <MovieContext.Provider value={{ movies, selectedMovie, selectMovie }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
