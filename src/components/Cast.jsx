import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { getFilmsActors } from "../utils/apiService";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";
const defaultPoster =
  "http://valmorgan.co.nz/wp-content/uploads/2016/06/default-movie-1-3.jpg";

export default function Cast() {
  const [cast, setCast] = useState([]);

  const location = useLocation();

  useEffect(() => {
    let cleanUp = false;
    getFilmsActors(location.state.id).then((resp) => {
      if (!cleanUp) {
        setCast(resp.data.cast);
      }
    });
    return () => (cleanUp = true);
  });

  return (
    <>
      <ul className="CastList">
        {cast.length > 0 ? (
          cast.map((el) => {
            return (
              <li key={el.id}>
                <h2>{el.name}</h2>
                <img
                  width="200"
                  src={
                    el.profile_path !== null && el.profile_path !== undefined
                      ? BASE_IMG_URL + el.profile_path
                      : defaultPoster
                  }
                  alt={el.name}
                />
              </li>
            );
          })
        ) : (
          <li>
            <h2>No Info</h2>
          </li>
        )}
      </ul>
    </>
  );
}
