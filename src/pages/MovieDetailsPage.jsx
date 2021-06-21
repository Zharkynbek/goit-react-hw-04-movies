import React, { Component } from "react";
import { getFilmById } from "../utils/apiService";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

class MovieDetailsPage extends Component {
  state = {
    filmInfo: {},
  };

  componentDidMount() {
    getFilmById(this.props.location.state.id).then((resp) => {
      this.setState({ filmInfo: resp.data });
    });
    }
    
    handleGoBack = () => {
        this.props.history.push(this.props.history.location.state.from, {
          search: this.props.history.location.state.search,
        });
    }

  render() {
    console.log(this.props);
    return (
      <>
        <h1>Film Information</h1>
        <button onClick={this.handleGoBack}>GoBack</button>
        <h2>{this.state.filmInfo.original_title}</h2>
        <img src={`${BASE_IMG_URL}${this.state.filmInfo.poster_path}`} alt="" />
        <p>{this.state.filmInfo.overview}</p>
      </>
    );
  }
}

export default MovieDetailsPage;