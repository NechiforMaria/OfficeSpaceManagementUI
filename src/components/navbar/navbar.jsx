import React, { Component } from "react";
import "./navbar.css";
import NavBarEmployees from "./navbarEmployees";
import OfficeAdministratorNavBar from "./navbarOfficeAdministrator";
import NavBarAdministrator from "./navbarAdministrator";
class NavBar extends Component {
  state = {
    persons: [],
  };

  render() {
    return (
      <React.Fragment>
        {this.state.persons === "Administrator" ? (
          <NavBarAdministrator />
        ) : this.state.persons === "Office Administrator" ? (
          <OfficeAdministratorNavBar />
        ) : this.state.persons === "Employees" ? (
          <NavBarEmployees />
        ) : null}
      </React.Fragment>
    );
  }
}

export default NavBar;
