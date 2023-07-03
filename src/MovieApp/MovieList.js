import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const MovieList = () => {
  const { movies, selectMovie } = useContext(MovieContext);

  return (
    <div>
      <h2>Movies List</h2>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <button onClick={() => selectMovie(movie)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
