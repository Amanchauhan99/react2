import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const MovieDetail = () => {
  const { selectedMovie } = useContext(MovieContext);

  if (!selectedMovie) {
    return <div>No movie selected</div>;
  }

  return (
    <div>
      <h2>Movie Details</h2>
      <h3>Title: {selectedMovie.Title}</h3>
      <p>Year: {selectedMovie.Year}</p>
      <p>IMDB ID: {selectedMovie.imdbID}</p>
      <p>Type: {selectedMovie.Type}</p>
    </div>
  );
};

export default MovieDetail;
