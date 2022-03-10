import React, { Component } from "react";
import { Search } from "../components/Search";
import { variables } from "../components/Variables";

export class BuildingManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      modalTitle: "",
      BuildingName: "",
      NumberOfFloors: "",
      BuildingAddress: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "Building")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  changeBuildingName = (e) => {
    this.setState({ BuildingName: e.target.value });
  };

  changeNumberOfFloors = (e) => {
    this.setState({ NumberOfFloors: e.target.value });
  };

  changeBuildingAddress = (e) => {
    this.setState({ BuildingAddress: e.target.value });
  };

  addClick() {
    this.setState({
      modalTitle: "Add new building",
      BuildingName: "",
      NumberOfFloors: "",
      BuildingAddress: "",
    });
  }

  editClick(us) {
    this.setState({
      modalTitle: "Edit building",
      BuildingName: us.BuildingName,
      NumberOfFloors: us.NumberOfFloors,
      BuildingAddress: us.BuildingAddress,
    });
  }

  createClick() {
    fetch(variables.API_URL + "Building", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        BuildingName: this.state.BuildingName,
        NumberOfFloors: this.state.NumberOfFloors,
        BuildingAddress: this.state.BuildingAddress,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  updateClick() {
    fetch(variables.API_URL + "Building", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        BuildingName: this.state.BuildingName,
        NumberOfFloors: this.state.NumberOfFloors,
        BuildingAddress: this.state.BuildingAddress,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  deleteClick(BuildingName) {
    if (window.confirm("Are tou sure?")) {
      fetch(variables.API_URL + "Building/" + BuildingName, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            alert(result);
            this.refreshList();
          },
          (error) => {
            alert("Failed");
          }
        );
    }
  }

  render() {
    const { users, modalTitle, BuildingName, NumberOfFloors, BuildingAddress } =
      this.state;
    return (
      <div>
        <label className=" m-2">Search a specific building: </label>

        <Search />

        <button
          type="button"
          className="btn btn-primary m-2 float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => this.addClick()}
        >
          Add new Building
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Building Name</th>
              <th>Number Of Floors</th>
              <th>Building Address</th>

              <th>Add new office</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((us) => (
              <tr key={us.BuildingName}>
                <td> {us.BuildingName}</td>
                <td> {us.NumberOfFloors}</td>
                <td> {us.BuildingAddress}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-file-earmark-plus-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </td>

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
                </td>

                <td>
                  <button type="button" className="btn btn-light mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-circle-fill"
                      viewBox="0 0 16 16"
                      onClick={() => this.deleteClick(us.BuildingName)}
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
                  <span className="input-group-text">Number Of Floors</span>
                  <input
                    type="text"
                    className="form-control"
                    value={NumberOfFloors}
                    onChange={this.changeNumberOfFloors}
                  />
                </div>
              </div>

              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Building Address</span>
                  <input
                    type="text"
                    className="form-control"
                    value={BuildingAddress}
                    onChange={this.changeBuildingAddress}
                  />
                </div>
              </div>

              {modalTitle === "Add new building" ? (
                <button
                  type="button"
                  className="btn btn-primary float-start"
                  onClick={() => this.createClick()}
                >
                  Create
                </button>
              ) : null}

              {modalTitle === "Edit building" ? (
                <button
                  type="button"
                  className="btn btn-primary float-start"
                  onClick={() => this.updateClick()}
                >
                  Edit
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
