import React, { useState } from "react";
import Axios from "axios";
const HeaderLoggedOut = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await Axios.post("/login", {
        username,
        password,
      });
      if (response.data) {
        // console.log(response.data);
        localStorage.setItem("socialFinderToken", response.data.token);
        localStorage.setItem("socialFinderUsername", response.data.username);
        localStorage.setItem("socialFinderAvatar", response.data.avatar);

        props.setIsLoggedIn(true);
      } else {
        console.log("incorrect username or password");
      }
    } catch (e) {
      console.log("some error");
    }
  }

  return (
    <form className="mb-0 pt-2 pt-md-0" onSubmit={handleSubmit}>
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            name="username"
            className="form-control form-control-sm input-dark"
            type="text"
            placeholder="Username"
            autoComplete="off"
          />
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            className="form-control form-control-sm input-dark"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="col-md-auto">
          <button className="btn btn-success btn-sm">Sign In</button>
        </div>
      </div>
    </form>
  );
};

export default HeaderLoggedOut;