import React, { Component } from "react";
import { variables } from "../components/Variables";

export class BuildingManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buildings: [],
      modalTitle: "",
      BuildingID: "",
      BuildingName: "",
      FloorsNo: "",
      BuildingAddress: "",

      office: [],
      OfficeName: "",
      FloorNo: "",
      OfficeAdminName: "",
      TotalDesksCount: "",
      UsableDesksCount: "",
      OccupiedDesksCount: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "Buildings")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ buildings: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  changeBuildingName = (e) => {
    this.setState({ BuildingName: e.target.value });
  };

  changeFloorsNo = (e) => {
    this.setState({ FloorsNo: e.target.value });
  };

  changeBuildingAddress = (e) => {
    this.setState({ BuildingAddress: e.target.value });
  };

  changeOfficeName = (e) => {
    this.setState({ OfficeName: e.target.value });
  };

  changeFloorNo = (e) => {
    this.setState({ FloorNo: e.target.value });
  };

  changeOfficeAdminName = (e) => {
    this.setState({ OfficeAdminName: e.target.value });
  };

  changeTotalDesksCount = (e) => {
    this.setState({ TotalDesksCount: e.target.value });
  };

  changeUsableDesksCount = (e) => {
    this.setState({ UsableDesksCount: e.target.value });
  };

  changeOccupiedDesksCount = (e) => {
    this.setState({ OccupiedDesksCount: e.target.value });
  };

  addClick() {
    this.setState({
      modalTitle: "Add new building",
      BuildingName: "",
      FloorsNo: "",
      BuildingAddress: "",
    });
  }

  addOfficeClick(us) {
    this.setState({
      modalTitle: "Add new office",
      OfficeName: "",
      BuildingName: us.BuildingName,
      FloorNo: "",
      OfficeAdminName: "",
      TotalDesksCount: "",
      UsableDesksCount: "",
      OccupiedDesksCount: "",
    });
  }

  createClick() {
    fetch(variables.API_URL + "Buildings", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        BuildingName: this.state.BuildingName,
        FloorsNo: this.state.FloorsNo,
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

  createOfficeClick() {
    fetch(variables.API_URL + "Offices", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        OfficeName: this.state.OfficeName,
        BuildingName: this.state.BuildingName,
        FloorNo: this.state.FloorNo,
        OfficeAdminName: this.state.OfficeAdminName,
        TotalDesksCount: this.state.TotalDesksCount,
        UsableDesksCount: this.state.UsableDesksCount,
        OccupiedDesksCount: this.state.OccupiedDesksCount,
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

  editClick(us) {
    this.setState({
      modalTitle: "Edit building",
      BuildingID: us.BuildingID,
      BuildingName: us.BuildingName,
      FloorsNo: us.FloorsNo,
      BuildingAddress: us.BuildingAddress,
    });
  }

  updateClick() {
    fetch(variables.API_URL + "Buildings", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        BuildingID: this.state.BuildingID,
        BuildingName: this.state.BuildingName,
        FloorsNo: this.state.FloorsNo,
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

  deleteClick(BuildingID) {
    if (window.confirm("Are tou sure?")) {
      fetch(variables.API_URL + "Buildings/" + BuildingID, {
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
    const {
      buildings,
      modalTitle,
      BuildingName,
      FloorsNo,
      BuildingAddress,
      OfficeName,
      FloorNo,
      OfficeAdminName,
      TotalDesksCount,
      UsableDesksCount,
      OccupiedDesksCount,
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
            {buildings.map((us) => (
              <tr key={us.BuildingName}>
                <td> {us.BuildingName}</td>
                <td> {us.FloorsNo}</td>
                <td> {us.BuildingAddress}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success mr-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-file-earmark-plus-fill"
                      viewBox="0 0 16 16"
                      onClick={() => this.addOfficeClick(us)}
                    >
                      <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    className="btn btn-secondary"
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
                  <button type="button" className="btn btn-danger mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-circle-fill"
                      viewBox="0 0 16 16"
                      onClick={() => this.deleteClick(us.BuildingID)}
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
                  <span className="input-group-text">Building Name *</span>
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
                  <span className="input-group-text">Number Of Floors *</span>
                  <input
                    type="text"
                    className="form-control"
                    value={FloorsNo}
                    onChange={this.changeFloorsNo}
                  />
                </div>
              </div>

              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Building Address *</span>
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

        <div
          className="modal fade"
          id="exampleModal2"
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
                  <span className="input-group-text">Office Name *</span>
                  <input
                    type="text"
                    className="form-control"
                    value={OfficeName}
                    onChange={this.changeOfficeName}
                  />
                </div>
              </div>

              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Building Name *</span>
                  <input
                    type="text"
                    className="form-control"
                    value={BuildingName}
                    disabled
                    onChange={this.changeBuildingName}
                  />
                </div>
              </div>

              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Floor No *</span>
                  <input
                    type="text"
                    className="form-control"
                    value={FloorNo}
                    onChange={this.changeFloorNo}
                  />
                </div>
              </div>

              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Office Admin Name </span>
                  <input
                    type="text"
                    className="form-control"
                    value={OfficeAdminName}
                    onChange={this.changeOfficeAdminName}
                  />
                </div>
              </div>

              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Total Desks Count *</span>
                  <input
                    type="text"
                    className="form-control"
                    value={TotalDesksCount}
                    onChange={this.changeTotalDesksCount}
                  />
                </div>
              </div>

              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Usable Desks Count *</span>
                  <input
                    type="text"
                    className="form-control"
                    value={UsableDesksCount}
                    onChange={this.changeUsableDesksCount}
                  />
                </div>
              </div>

              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    Occupied Desks Count *
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={OccupiedDesksCount}
                    onChange={this.changeOccupiedDesksCount}
                  />
                </div>
              </div>

              {(OfficeName &&
                TotalDesksCount &&
                UsableDesksCount &&
                OccupiedDesksCount) !== "" &&
              TotalDesksCount > 0 &&
              UsableDesksCount >= 0 &&
              OccupiedDesksCount >= 0 &&
              FloorNo >= 0 &&
              UsableDesksCount <= TotalDesksCount &&
              UsableDesksCount >= OccupiedDesksCount ? (
                <button
                  type="button"
                  className="btn btn-primary float-start"
                  onClick={() => this.createOfficeClick()}
                >
                  Create office
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
