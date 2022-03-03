import React, { Component } from "react";
import NavBar from "./Administrator/navbar";
import "./App.css";
import { UserStatus } from "./Administrator/userStatus";
import Main from "./Main";
import { Approval } from "./Administrator/Approval";
import { DeskAssignment } from "./Administrator/DeskAssignment";
import { Requiest } from "./Administrator/Requiest";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/Approval">
              <Approval />
            </Route>
            <Route path="/Requiest" component={Requiest} />
            <Route path="/DeskAssignment" component={DeskAssignment} />
          </Switch>
        </BrowserRouter>
        <UserStatus />
      </React.Fragment>
    );
  }
}
export default App;
