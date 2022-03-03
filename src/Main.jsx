import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Approval } from "./Administrator/Approval";
import { DeskAssignment } from "./Administrator/DeskAssignment";
import { Requiest } from "./Administrator/Requiest";

function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/Approval">
          <Approval />
        </Route>
        <Route path="/Requiest" component={Requiest} />
        <Route path="/DeskAssignment" component={DeskAssignment} />
      </Switch>
    </Router>
  );
}
export default Main;
