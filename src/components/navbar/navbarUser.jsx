import React from "react";
import logo from "./Logo.jpg";
import {NavLink} from "react-router-dom";

class UserNavBar extends React.Component {
  render() {
    return (
      <nav className="nav-">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <div>
              <img className="logo" src={logo} alt="No More Bugs" />
            </div>
          </div>
          <div style={mystyledreapta} className="collapse navbar-collapse " id="navbarNavDropdown">
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
                <ul className="dropdown-menu">
                  <li className="dropdown-item color: black">
                    <NavLink className="nav-link" to="/userStatus">
                      User Status
                    </NavLink>
                  </li>
                  <li className="dropdown-item color: black">Office Status</li>
                </ul>
              </li>

              <li>
                <NavLink to="/DeskAssignment" className="nav-link">
                  Desk Assignment
                </NavLink>
              </li>
              <li>
                <NavLink to="/Request" className="nav-link">
                  Request
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </nav>
    );
  }
}
const mystyledreapta = {
  float: "right",
};
export default UserNavBar;
