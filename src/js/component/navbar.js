import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { EmojiNeutral } from "react-bootstrap-icons";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg bg-dark opacity-75 pt-0 pb-0">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="logo" width="60px" src="https://img.icons8.com/color/344/star-wars.png" />
        </Link>

        <div className="btn-group">
          <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </button>
          <ul className="dropdown-menu">
            
          </ul>


        </div>
        </div>

    </nav>
  );
};

