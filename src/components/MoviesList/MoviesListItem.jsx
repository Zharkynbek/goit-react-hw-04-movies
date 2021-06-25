import React from "react";
import { Link } from "react-router-dom";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";
const defaultPoster =
  "http://valmorgan.co.nz/wp-content/uploads/2016/06/default-movie-1-3.jpg";

const MoviesListItem = ({ movie, history, query }) => {
  console.log(movie);
  return (
    <Link
      style={{ textDecoration: "none" }}
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
        {/* <p className="ReleaseDate">Release date: {movie.release_date}</p> */}
        <img
          src={
            movie.poster_path !== null && movie.poster_path !== undefined
              ? BASE_IMG_URL + movie.poster_path
              : defaultPoster
          }
          alt=""
          width="320"
          className="ImageGalleryItem-image"
        />
        <p className="ReleaseDate">{movie.original_title}</p>
        <p className="ReleaseDate">Raiting: {movie.vote_average}</p>
      </li>
    </Link>
  );
};

export default MoviesListItem;
