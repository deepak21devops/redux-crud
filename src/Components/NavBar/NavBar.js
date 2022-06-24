import React from "react";
import "./navbar.css";
const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a href="s" class="navbar-brand">
            Navbar
          </a>

          <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex flex-row">
            <li class="nav-item mx-3">
              <a class="nav-link active" aria-current="page" href="p">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="p">
                All Post
              </a>
            </li>
          </ul>

          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
