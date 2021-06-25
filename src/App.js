import React, {Component} from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import SearchMovies from "./pages/SearchMovies";
import "./styles/base.scss"

class App extends Component {
  state = {
    query: ""
  };

  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={SearchMovies} />
          <Route path="/movies/:id" component={MovieDetailsPage} />
        </Switch>
      </>
    );
  }
}

export default App;
