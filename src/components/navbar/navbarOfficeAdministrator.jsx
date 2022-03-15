import React from "react";
import logo from "./Logo.jpg";
import {NavLink} from "react-router-dom";
import "./navbar.css";

class OfficeAdministratorNavBar extends React.Component {
  render() {
    return (
      <nav className="nav-">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <div>
              <img className="logo" src={logo} alt="No More Bugs" />
            </div>
          </div>
          <div style={mystyleflex} className="justify-content-end">
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
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
                    Status
                  </span>
                  <ul
                    className="dropdown-menu"
                    style={{backgroundColor: "#343a40"}}
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li className="dropdown-item color: black">
                      <NavLink className="nav-link" to="/userStatus">
                        User Status
                      </NavLink>
                    </li>
                    <li className="dropdown-item color: black">
                      <NavLink className="nav-link" to="/officeStatus">
                        Office Status
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <NavLink className="nav-link" to="/DeskAssignment">
                    Desk Assignment
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/Request">
                    Request
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/MyRequest">
                    My Request
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    );
  }
}
const mystyledreapta = {
  float: "right",
};
const mystyleflex = {
  display: "flex",
};
export default OfficeAdministratorNavBar;
