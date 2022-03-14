import React, { Component } from "react";
import NavBar from "./components/navbar/navbar";
import "./App.css";
import { UserManagement } from "./Administrator/userManagement";
import { officeStatus } from "./Administrator/officeStatus";
import { Approval } from "./Administrator/Approval";
import { DeskAssignment } from "./Administrator/DeskAssignment";
import { BuildingManagement } from "./Administrator/buildingManagement";
import { MyRequest } from "./Administrator/MyRequest";
import { Request } from "./Administrator/Request";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./components/Login/login";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <LoginForm />*/}
        <Router>
          <NavBar />
          <Switch>
            <Route path="/Approval">
              <Approval />
            </Route>
            <Route path="/Request" component={Request} />
            <Route path="/MyRequest" component={MyRequest} />
            <Route path="/Approval" component={Approval} />
            <Route path="/DeskAssignment" component={DeskAssignment} />
            <Route path="/userManagement" component={UserManagement} />
            <Route path="/officeStatus" component={officeStatus} />
            <Route path="/buildingManagement" component={BuildingManagement} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
