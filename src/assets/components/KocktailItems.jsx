import React from "react";
import { Link } from "react-router-dom";

export const KocktailItems = ({ id, name, image, info, glass }) => {
  return (
    <div className="box" key={id}>
      <div className="image">
        <img src={image} />
      </div>
      <div className="footer-box">
        <h1>{name}</h1>
        <h3>{glass}</h3>
        <p>{info}</p>
        <button>
          <Link to={`/details/${id}`}>DETAILS</Link>
        </button>
      </div>
    </div>
  );
};
