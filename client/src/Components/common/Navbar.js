import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  let [selectedItem, setSelectedItem] = useState("/");
  const listItemStyle = (item) => {
    return {
      color: selectedItem === item ? "red" : "black",
      cursor: "pointer",
    };
  };
  const navigation = (item) => {
    setSelectedItem(item);
    navigate(`${item}`);
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <span class="navbar-brand" href="#">
        My Blog
      </span>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav ms-auto mx-2 mt-2 mt-lg-0 d-flex">
          <li class="nav-item " style={listItemStyle("/")}>
            <span className="feed " onClick={() => navigation("/")}>
              Feed
            </span>
          </li>
          <li class="nav-item">
            <span
              className="users "
              style={listItemStyle("/users")}
              onClick={() => navigation("users")}
            >
              Users
            </span>
          </li>
          <li class="nav-item">
            <span
              className="Profile"
              style={listItemStyle("/profile")}
              onClick={() => navigation("profile")}
            >
              Profile
            </span>
          </li>
          <li class="nav-item  my-2 my-lg-0">
            <button
              type="button"
              className="Auth btn  my-sm-0 "
              style={listItemStyle("/Auth")}
              onClick={() => navigation("authentication")}
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
