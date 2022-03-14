import React from "react";
import {variables} from "../components/Variables";

export class UserStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      FirstName: "",
      LastName: "",
      BuildingName: "",
      WorkRemote: "",
    };
  }
  refreshList() {
    fetch(variables.API_URL + "Employees")
      .then((response) => response.json())
      .then((data) => {
        this.setState({users: data, UsersWithoutFilter: data});
      });
  }
  componentDidMount() {
    this.refreshList();
  }

  render() {
    const {users, FirstName, LastName, BuildingName, WorkRemote} = this.state;
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Building Name</th>
              <th>Work Remote</th>
            </tr>
          </thead>
          <tbody>
            {users.map((us) => (
              <tr key={us.ID}>
                <td>{us.FirstName}</td>
                <td>{us.LastName}</td>
                <td>{us.BuildingName}</td>
                <td>{us.WorkRemote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default UserStatus;
