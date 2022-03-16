import React, { Component } from "react";
import NavBarAdministrator from "./components/navbar/navbarAdministrator";
//import NavBarEmployees from "./components/navbar/navbarEmployees";
import "./App.css";
import { UserStatus } from "./User/userStatus";

import { UserManagement } from "./Administrator/userManagement/userManagement";
import { officeStatus } from "./Administrator/officeStatus";
import { officeStatusOfficeAdministrator } from "./OfficeAdministrator/officeStatusOfAdministrator";
import { officeStatusEmployee } from "./Employee/officeStatusEmployee";

import { Approval } from "./Administrator/Approval";
import { DeskAssignment } from "./Administrator/DeskAssignment";
import { BuildingManagement } from "./Administrator/buildingManagement";
import { MyRequest } from "./Administrator/MyRequest";
import { Request } from "./Administrator/Request";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
///import LoginForm from "./components/Login/login";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/*<LoginForm />*/}
        <Router>
          <NavBarAdministrator />
          <Switch>
            <Route path="/Approval">
              <Approval />
            </Route>
            <Route path="/Request" component={Request} />
            <Route path="/MyRequest" component={MyRequest} />
            <Route path="/Approval" component={Approval} />
            <Route path="/DeskAssignment" component={DeskAssignment} />
            <Route path="/userManagement" component={UserManagement} />
            <Route path="/userStatus" component={UserStatus} />
            <Route
              path="/officeStatusOfAdministrator"
              component={officeStatusOfficeAdministrator}
            />
            <Route
              path="/officeStatusEmployee"
              component={officeStatusEmployee}
            />

            <Route path="/officeStatus" component={officeStatus} />
            <Route path="/buildingManagement" component={BuildingManagement} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
