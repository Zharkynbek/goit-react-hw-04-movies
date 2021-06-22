import axios from "axios";

async function getTrendingFilms() {
  const resp = await axios({
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/week?api_key=be5f011c0c95ebac9e43595fb9d549ff",
  });
  return resp;
}

function getFilmById(id) {
  return axios({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=be5f011c0c95ebac9e43595fb9d549ff`,
  });
}

function getFilmsByQuery(query) {
  return axios({
    method: "GET",
    url:
      "https://api.themoviedb.org/3/search/movie?api_key=be5f011c0c95ebac9e43595fb9d549ff&query=" +
      query,
  });
}

function getFilmsActors() {
  return axios({
    method: "GET",
    url:
      "https://api.themoviedb.org/3/search/movie?api_key=be5f011c0c95ebac9e43595fb9d549ff"
  });
}

function getFilmsReviews() {
  return axios({
    method: "GET",
    url:
      "https://api.themoviedb.org/3/search/movie?api_key=be5f011c0c95ebac9e43595fb9d549ff"
  });
}


export {
  getTrendingFilms,
  getFilmById,
  getFilmsByQuery,
  getFilmsActors,
  getFilmsReviews,
};
