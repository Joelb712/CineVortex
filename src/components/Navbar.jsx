import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  return (
    <nav className="navbar">
      <NavLink to="/"  className="nav-link" end>
        Home
      </NavLink>
      <NavLink to="/peliculas" className="nav-link">
        Películas
      </NavLink>
      <NavLink to="/registro" className="nav-link">
        Registro
      </NavLink>
    </nav>
  );
}

export default Navbar;
