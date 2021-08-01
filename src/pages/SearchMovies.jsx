import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { getFilmsByQuery } from "../utils/apiService";
import MoviesList from "../components/MoviesList/MoviesList";

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    let cleanUp = false;
    setQuery(location.state !== null ? location.state.search : "");
    if (location.state !== null) {
      getFilmsByQuery(location.state.search).then((resp) => {
        if (!cleanUp) {
          setMovies(resp.data.results);
        }
      });
    }

    return () => (cleanUp = true);
  }, [location.state]);

  const handleChangeQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    getFilmsByQuery(query).then((resp) => {
      setMovies(resp.data.results);
    });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmitForm}>
        <label htmlFor="">
          <input
            onInput={handleChangeQuery}
            type="text"
            placeholder="search movies"
            name="query"
            value={query}
          />
        </label>
      </form>
      <MoviesList query={query} movies={movies} />
    </>
  );
}
