import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Approval } from "./Administrator/Approval";
import { DeskAssignment } from "./Administrator/DeskAssignment";
import { Request } from "./Administrator/Request";
import { UserStatus } from "./Administrator/userStatus";

function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/Approval">
          <Approval />
        </Route>
        <Route path="/Request" component={Request} />
        <Route path="/DeskAssignment" component={DeskAssignment} />
        <Route path="/userStatus" component={UserStatus} />
      </Switch>
    </Router>
  );
}
export default Main;
