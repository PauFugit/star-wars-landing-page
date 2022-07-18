import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link
              className="nav-link active text-secondary"
              aria-current="page"
              to="/"
            >
              Home
            </Link>
            <Link className="nav-link text-info" to="/people">
              People
            </Link>
            <Link className="nav-link text-info" to="/planets">
              Planets
            </Link>
            <Link className="nav-link text-info" to="/vehicles">
              Vehicles
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
