import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "./Logo.jpg";

class NavBarAdministrator extends Component {
  state = {
    persons: [],
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div>
            <img className="logoo" src={logo} alt="No More Bugs" />
          </div>
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
          <div style={mystyleflex} className="justify-content-end">
            <div
              style={mystyledreapta}
              className="collapse navbar-collapse "
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav ">
                <li className="nav-item dropdown me-2 ">
                  <span
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Management
                  </span>
                  <ul
                    style={mystyle}
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li className="dropdown-item color: black">
                      <NavLink className="nav-link" to="/buildingManagement">
                        Building Management
                      </NavLink>
                    </li>
                    <li className="dropdown-item color: black">
                      <NavLink className="nav-link" to="/userManagement">
                        User Management
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <NavLink className="nav-link" to="/DeskAssignment">
                    Desk Assignment
                  </NavLink>
                </li>

                <li className="nav-item me-2">
                  <NavLink className="nav-link" to="/Request">
                    Make a Request
                  </NavLink>
                </li>

                <li className="nav-item me-2">
                  <NavLink className="nav-link" to="/MyRequest">
                    My Request
                  </NavLink>
                </li>

                <li className="nav-item me-2">
                  <NavLink className="nav-link" to="/Approval">
                    Approval
                  </NavLink>
                </li>

                <li className="nav-item me-2">
                  <NavLink className="nav-link" to="/userStatus">
                    User Status
                  </NavLink>
                </li>

                <li className="nav-item dropdown me-2 ">
                  <span
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Office Status
                  </span>
                  <ul
                    style={mystyle}
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <NavLink className="nav-link" to="/officeStatus">
                        Administrator
                      </NavLink>
                    </li>

                    <li className="nav-item me-2">
                      <NavLink
                        className="nav-link"
                        to="/officeStatusOfAdministrator"
                      >
                        Office Administrator
                      </NavLink>
                    </li>
                    <li className="nav-item me-2">
                      <NavLink className="nav-link" to="/officeStatusEmployee">
                        Employee
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item me-2">
                  <NavLink className="nav-link" to="/LoginForm">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
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

export default NavBarAdministrator;

const mystyle = {
  backgroundColor: "#343A40",
};

const mystyledreapta = {
  float: "right",
};

const mystyleflex = {
  display: "flex",
};
