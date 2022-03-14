import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import "./navbar.css";
import logo from "./logo_transparent.png";
class NavBar extends Component {
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
                  <NavLink className="nav-link" to="/officeStatus">
                    Office Status
                  </NavLink>
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
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;

const mystyle = {
  backgroundColor: "#343A40",
};

const mystyledreapta = {
  float: "right",
};

const mystyleflex = {
  display: "flex",
};
