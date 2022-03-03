import React, { Component } from "react";
import { Approval } from "./Approval";
import { Requiest } from "./Requiest";
import { DeskAssignment } from "./DeskAssignment";

import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            No More Bugs
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="justify-content-end">
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
              <ul className="navbar-nav ">
                <li className="nav-item dropdown me-2 ">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Management
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        User management
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Building management
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Office management
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown me-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Status
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Office status
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        User status
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item me-2">
                  <NavLink className="nav-link" to="/DeskAssignment">
                    Desk Assignment
                  </NavLink>
                </li>
                <li className="nav-item me-2">
                  <NavLink className="nav-link" to="/Requiest">
                    Requiest
                  </NavLink>
                </li>
                <li className="nav-item me-2">
                  <NavLink className="nav-link" to="/Approval">
                    Approval
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
