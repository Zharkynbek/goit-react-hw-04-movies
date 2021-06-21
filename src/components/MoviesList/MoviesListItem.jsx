import React from "react";
import { Link } from "react-router-dom";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

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
      <li className="ImageGalleryItem">
        <h1>Title: {movie.title}</h1>
        <p>Release date: {movie.release_date}</p>
        <img src={`${BASE_IMG_URL}${movie.poster_path}`} alt="" width="320" />
        {console.log(movie)}
      </li>
    </Link>
  );
};

export default MoviesListItem;
