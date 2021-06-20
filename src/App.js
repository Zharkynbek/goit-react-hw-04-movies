import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage"
import MoviesPage from "./components/MoviesPage";
import Cast from "./components/Cast";
import Reviews from "./components/Reviews";

const App = () => (
  <>
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/" component={MoviesPage} />
      <Route path="/" component={Cast} />
      <Route path="/" component={Reviews} />
    </Switch>
  </>
);

export default App;
