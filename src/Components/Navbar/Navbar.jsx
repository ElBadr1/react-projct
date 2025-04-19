import React from "react";
import logo from "../../Images/logo.png";
import Movie from "../Shows/Movie/Movie";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container">
          <div className="col-md-1">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo-image" />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='movie'>
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="tv">
                  TV
                </Link>
              </li>
              {/* <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
