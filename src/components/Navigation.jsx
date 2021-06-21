import React from "react"
import {NavLink} from "react-router-dom"

const Navigation = () => (
  <header>
    <NavLink to="/">
      <button>HOME</button>
    </NavLink>
    <NavLink to="/movies">
      <button>MOVIES</button>
    </NavLink>
  </header>
);

export default Navigation