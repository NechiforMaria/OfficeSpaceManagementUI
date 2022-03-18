import React from "react";
import { variables } from "../components/Variables";

export class UserStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      FirstName: "",
      LastName: "",
      BuildingName: "",
      WorkRemote: "",

      UsersNameFilter: "",
      UsersWithoutFilter: [],
    };
  }
  refreshList() {
    fetch(variables.API_URL + "Employees")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data, UsersWithoutFilter: data });
      });
  }
  componentDidMount() {
    this.refreshList();
  }

  FilterFn() {
    var UsersNameFilter = this.state.UsersNameFilter;

    var filteredData = this.state.UsersWithoutFilter.filter(function (el) {
      return String(el.FirstName)
        .toLowerCase()
        .includes(UsersNameFilter.trim().toLowerCase());
    });

    this.setState({ users: filteredData });
  }

  changeUsersNameFilter = (e) => {
    this.state.UsersNameFilter = e.target.value;
    this.FilterFn();
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <label className=" m-2">Search a specific user: </label>
        <span className="Icon-inside">
          <input
            className="input-field mb-3"
            type="text"
            placeholder="Search"
            name="search"
            onChange={this.changeUsersNameFilter}
          />
        </span>
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
