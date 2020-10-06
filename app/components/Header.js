import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut";
const Header = (props) => {
  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            {" "}
            socialFinder{" "}
          </Link>
        </h4>
        {props.isLoggedin ? (
          <HeaderLoggedIn setIsLoggedIn={props.setIsLoggedIn} />
        ) : (
          <HeaderLoggedOut setIsLoggedIn={props.setIsLoggedIn} />
        )}
      </div>
    </header>
  );
};

export default Header;
