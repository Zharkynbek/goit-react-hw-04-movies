import React, { useState, useEffect } from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import { getTrendingFilms } from "../utils/apiService";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let cleanUp = false;
    getTrendingFilms().then((resp) => {
      if (!cleanUp) {
        setMovies(resp.data.results);
      }
    });
    return () => (cleanUp = true);
  });
  useEffect(() => {
    document.title = "Top Movies";
  });

  return (
    <>
      <h1 className="HomeTitle">Tranding today</h1>
      <MoviesList movies={movies} />
    </>
  );
}
