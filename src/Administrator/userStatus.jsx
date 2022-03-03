import React, { Component } from "react";
import { variables } from "../components/Variables";

export class UserStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      found: 1,
      users: [],
      modalTitle: "",
      Id: "",
      FirstName: "",
      LastName: "",
      BuildingName: "",
      WorkRomote: "",
      EmailAddress: "",
      Password: "",
      Role: "",
      Gender: "",
      BirthDate: "",
      Nationality: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "user")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  changeId = (e) => {
    this.setState({ Id: e.target.value });
  };

  changeFirstName = (e) => {
    this.setState({ FirstName: e.target.value });
  };

  changeLastName = (e) => {
    this.setState({ LastName: e.target.value });
  };

  changeBuildingName = (e) => {
    this.setState({ BuildingName: e.target.value });
  };

  changeWorkRomote = (e) => {
    this.setState({ WorkRomote: e.target.value });
  };

  changeEmailAddress = (e) => {
    this.setState({ EmailAddress: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ Password: e.target.value });
  };

  changeRole = (e) => {
    this.setState({ Role: e.target.value });
  };

  changeGender = (e) => {
    this.setState({ Gender: e.target.value });
  };

  changeBirthDate = (e) => {
    this.setState({ BirthDate: e.target.value });
  };

  changeNationality = (e) => {
    this.setState({ Nationality: e.target.value });
  };

  addClick() {
    this.setState({
      modalTitle: "Add user",
      Id: 0,
      FirstName: "",
      LastName: "",
      BuildingName: "",
      WorkRomote: "",
      EmailAddress: "",
      Password: "",
      Role: "",
      Gender: "",
      BirthDate: "",
      Nationality: "",
    });
  }

  updateClick(us) {
    this.setState({
      modalTitle: "Edit user",
      Id: us.Id,
      FirstName: us.FirstName,
      LastName: us.LastName,
      BuildingName: us.BuildingName,
      WorkRemote: us.WorkRomote,
      EmailAddress: us.EmailAddress,
      Password: us.Password,
      Role: us.Role,
      Gender: us.Gender,
      BirthDate: us.BirthDate,
      Nationality: us.Nationality,
    });
  }

  render() {
    const {
      users,
      modalTitle,
      Id,
      FirstName,
      LastName,
      BuildingName,
      WorkRemote,
      EmailAddress,
      Password,
      Role,
      Gender,
      BirthDate,
      Nationality,
    } = this.state;
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary m-2 float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => this.addClick()}
        >
          Add User
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Building Name</th>
              <th>Work remote</th>
              <th>Email address</th>
              <th>Password</th>
              <th>Role</th>
              <th>Gender</th>
              <th>Birth date</th>
              <th>Nationality</th>
              <th>Update</th>
              <th>Activated</th>
              <th>Deactiveted</th>
            </tr>
          </thead>
          <tbody>
            {users.map((us) => (
              <tr key={us.Id}>
                <td>{us.Id}</td>
                <td> {us.FirstName}</td>
                <td> {us.LastName}</td>
                <td> {us.BuildingName}</td>
                <td> {us.WorkRemote}</td>
                <td> {us.EmailAddress}</td>
                <td> {us.Password}</td>
                <td> {us.Role}</td>
                <td> {us.Gender}</td>
                <td> {us.BirthDate}</td>
                <td> {us.Nationality}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.editClick(us)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </button>

                  <button type="button" className="btn btn-light mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </button>

                  <button type="button" className="btn btn-light mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalTitle}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Id</span>
                  <input
                    type="text"
                    className="form-control"
                    value={Id}
                    onChange={this.changeId}
                  />
                </div>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">FirstName</span>
                  <input
                    type="text"
                    className="form-control"
                    value={FirstName}
                    onChange={this.changeFirstName}
                  />
                </div>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Last Name</span>
                  <input
                    type="text"
                    className="form-control"
                    value={LastName}
                    onChange={this.changeLastName}
                  />
                </div>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Building Name</span>
                  <input
                    type="text"
                    className="form-control"
                    value={BuildingName}
                    onChange={this.changeBuildingName}
                  />
                </div>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Work Remote</span>
                  <input
                    type="text"
                    className="form-control"
                    value={WorkRemote}
                    onChange={this.changeWorkRemote}
                  />
                </div>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Email Address</span>
                  <input
                    type="text"
                    className="form-control"
                    value={EmailAddress}
                    onChange={this.changeEmailAddress}
                  />
                </div>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Password</span>
                  <input
                    type="text"
                    className="form-control"
                    value={Password}
                    onChange={this.changePassword}
                  />
                </div>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Role</span>
                  <input
                    type="text"
                    className="form-control"
                    value={Role}
                    onChange={this.changeRole}
                  />
                </div>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Gender</span>
                  <input
                    type="text"
                    className="form-control"
                    value={Gender}
                    onChange={this.changeGender}
                  />
                </div>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Birth Date</span>
                  <input
                    type="text"
                    className="form-control"
                    value={BirthDate}
                    onChange={this.changeBirthDate}
                  />
                </div>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Nationality</span>
                  <input
                    type="text"
                    className="form-control"
                    value={Nationality}
                    onChange={this.changeNationality}
                  />
                </div>
              </div>

              {Id === 0 ? (
                <button type="button" className="btn btn-primary float-start">
                  Create
                </button>
              ) : null}

              {/*users.forEach((element) => {
                if (element.Id == null) {
                  return;
                }
                if (element.Id === Id) {
                  this.found = 0;
                  // this.setState({ found });
                }
              })}

              {this.found.value === 1 ? (
                <button type="button" className="btn btn-primary float-start">
                  Create
                </button>
              ) : null*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
