import React from "react";
import MoviesListItem from "./MoviesListItem";

const MoviesList = ({ movies, query }) => {
  return (
    <ul className="MovieList">
      {movies.map((movie) => (
        <MoviesListItem query={query} key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesList;
