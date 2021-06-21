import React from "react";
import { Link } from "react-router-dom";

const MoviesListItem = ({ movie, history, query }) => {
  return (
    <Link
      to={{
        pathname: "/movies/" + movie.id,
        state: {
          id: movie.id,
          search: query !== undefined ? query : "",
          from: history.location.pathname,
        },
      }}
    >
      <li>
        <h1>{movie.title}</h1>
      </li>
    </Link>
  );
};

export default MoviesListItem;
