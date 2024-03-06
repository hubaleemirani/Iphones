import React from "react";
import "./applayout.css";
import card from "../../images/card.svg";
import heart from "../../images/heart.svg";
import search from "../../images/search.svg";

const Applayout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <h5 className="fw-bold">
          Exclusive
          </h5>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item"><u>Home</u></li>
              <li className="nav-item">Contact</li>
              <li className="nav-item">About</li>
              <li className="nav-item">Sign Up</li>
            </ul>
            <form className="d-flex">
              <div className="d-flex position-relative">
                <div>

                <input
                  className="form-control search py-2"
                  type="search"
                  placeholder="What are you looking for?"
                  aria-label="Search"
                  />
                  </div>
                <div className="position-absolute end-0 me-4 mt-2">
                  <img src={search} alt="" />
                </div>
              </div>
              <div className="d-flex ">
                <img src={heart} className="mx-2" alt="" />
                <img src={card} alt="" />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Applayout;
