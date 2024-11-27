import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <h1 className="title">The CocktailDB</h1>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};
