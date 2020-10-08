import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DispatchContext from "../DispatchContext";

const HeaderLoggedIn = (props) => {
  const appDispatch = useContext(DispatchContext);
  function handleLogout() {
    appDispatch({ type: "logout" });
    localStorage.removeItem("socialFinderToken");
    localStorage.removeItem("socialFinderUsername");
    localStorage.removeItem("socialFinderAvatar");
  }

  return (
    <div className="flex-row my-3 my-md-0">
      <a href="#" className="text-white mr-2 header-search-icon">
        <i className="fas fa-search"></i>
      </a>
      <span className="mr-2 header-chat-icon text-white">
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white"> </span>
      </span>
      <a href="#" className="mr-2">
        <img
          className="small-header-avatar"
          src="https://randomuser.me/api/portraits/men/15.jpg"
        />
      </a>
      <Link className="btn btn-sm btn-success mr-2" to="/create-post">
        Create Post
      </Link>
      <button onClick={handleLogout} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  );
};

export default HeaderLoggedIn;
