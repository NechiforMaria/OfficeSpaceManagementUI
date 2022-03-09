import React, {Component} from "react";
import NavBar from "./components/navbar/navbar";
import "./App.css";
import {UserStatus} from "./Administrator/userStatus";
import {Approval} from "./Administrator/Approval";
import {DeskAssignment} from "./Administrator/DeskAssignment";
import {Request} from "./Administrator/Request";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import LoginForm from "./components/login/login";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <LoginForm />
          <NavBar />
          <Switch>
            <Route path="/Approval">
              <Approval />
            </Route>
            <Route path="/Request" component={Request} />
            <Route path="/DeskAssignment" component={DeskAssignment} />
            <Route path="/userStatus" component={UserStatus} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
