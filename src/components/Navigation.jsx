import React from "react"
import { NavLink } from "react-router-dom"
import {Button} from "@material-ui/core"

const Navigation = () => (
  <header>
    <NavLink to="/">
      <Button variant="contained" color="primary">
        Home
      </Button>
    </NavLink>
    <NavLink to="/movies">
      <Button variant="contained" color="primary">
        Movies
      </Button>
    </NavLink>
  </header>
);

export default Navigation