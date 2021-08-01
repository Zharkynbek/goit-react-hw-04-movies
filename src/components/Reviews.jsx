import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import { getFilmsReviews } from "../utils/apiService";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const location = useLocation();

  useEffect(() => {
    let cleanUp = false;
    getFilmsReviews(location.state.id).then((resp) => {
      if (!cleanUp) {
        setReviews(resp.data.results);
      }
    });
    return () => (cleanUp = true);
  });

  return (
    <>
      <ul>
        {reviews.length > 0 ? (
          reviews.map((el) => {
            const img = el.author_details.avatar_path.includes("http")
              ? el.author_details.avatar_path.slice(
                  1,
                  el.author_details.avatar_path.length - 1
                )
              : BASE_IMG_URL + el.author_details.avatar_path;
            return (
              <li key={el.id}>
                <h2 style={{ marginLeft: "20px" }}>{el.author}</h2>
                <div style={{ display: "flex" }}>
                  <img
                    className="ImageMovieDetails "
                    src={img}
                    alt=""
                    width="200"
                  />
                  <div style={{ marginLeft: "25px" }}>
                    <p className="OriginalDescription">{el.content}</p>
                  </div>
                </div>
              </li>
            );
          })
        ) : (
          <li className="CastList">
            <h2>No Reviews</h2>
          </li>
        )}
      </ul>
    </>
  );
}
