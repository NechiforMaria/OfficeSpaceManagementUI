import React, {Component} from "react";
import NavBar from "./components/navbar/navbar";
import "./App.css";
import {UserStatus} from "./Administrator/userStatus";
import {Approval} from "./Administrator/Approval";
import {DeskAssignment} from "./Administrator/DeskAssignment";
import {Request} from "./Administrator/Request";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {UserManagement} from "./Administrator/userManagement";
import LoginForm from "./components/login/login";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/Approval">
              <Approval />
            </Route>
            <Route path="/Request" component={Request} />
            <Route path="/DeskAssignment" component={DeskAssignment} />
            <Route path="/userStatus" component={UserStatus} />
            <Route path="/userManagement" component={UserManagement} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
