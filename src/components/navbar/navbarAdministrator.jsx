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

                <li className="nav-item m-2">
                  <button>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      className="bi bi-box-arrow-in-right"
                      viewBox="2 2 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                      />
                    </svg>
                  </button>
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
