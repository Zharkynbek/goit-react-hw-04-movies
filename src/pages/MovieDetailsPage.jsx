import React, { useState, useEffect } from "react";
import {
  Route,
  NavLink,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { getFilmById } from "../utils/apiService";
import Reviews from "../components/Reviews";
import Cast from "../components/Cast";
import { Button } from "@material-ui/core";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";
const defaultPoster =
  "http://valmorgan.co.nz/wp-content/uploads/2016/06/default-movie-1-3.jpg";

export default function MovieDetailsPage() {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [filmInfo, setFilmInfo] = useState({});

  useEffect(() => {
    let cleanUp = false;
    getFilmById(location.state.id).then((resp) => {
      if (!cleanUp) {
        setFilmInfo(resp.data);
      }
    });
    return () => (cleanUp = true);
  });

  const handleGoBack = () => {
    history.push(location.state.from, {
      search: location.state.search,
    });
  };

  return (
    <>
      <h1 className="FilmInfoTitle">Film Information</h1>
      <button onClick={handleGoBack} className="goBack">
        GO BACK
      </button>
      <div className="InfoImage">
        <img
          src={
            filmInfo.poster_path !== null && filmInfo.poster_path !== undefined
              ? BASE_IMG_URL + filmInfo.poster_path
              : defaultPoster
          }
          alt=""
          width="200"
          className="ImageMovieDetails"
        />
        <div className="InfoBox">
          <h2 className="OriginalTitle">{filmInfo.original_title}</h2>
          <h3 className="OriginalTitle">Overview:</h3>
          <p className="OriginalDescription"> {filmInfo.overview}</p>
        </div>
      </div>

      <h2 className="AddInfo">Additional Information</h2>
      <NavLink
        style={{ textDecoration: "none" }}
        to={{
          pathname: match.url + "/cast",
          state: location.state,
        }}
      >
        <span className="Cast">
          <Button variant="contained" color="primary">
            Cast
          </Button>
        </span>
      </NavLink>
      <NavLink
        style={{ textDecoration: "none" }}
        to={{
          pathname: match.url + "/reviews",
          state: location.state,
        }}
      >
        <span className="Reviews">
          <Button variant="contained" color="primary">
            Reviews
          </Button>
        </span>
      </NavLink>
      <Route path={match.path + "/reviews"} component={Reviews} />
      <Route path={match.path + "/cast"} component={Cast} />
    </>
  );
}
