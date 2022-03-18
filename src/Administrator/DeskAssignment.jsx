import React, { Component } from "react";
import { variables } from "../components/Variables";

export class DeskAssignment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      desk: [],
      modalTitle: "",
      DeskID: "",
      EmployeeName: "",
      DeskNo: "",
      OfficeName: "",
      OfficeAdmin: "",
      BuildingName: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "Desks")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ desk: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  deAssignClick(dk) {
    if (window.confirm("Are tou sure?")) {
      fetch(variables.API_URL + "Desks", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          DeskID: dk.DeskID,
          EmployeeName: dk.EmployeeName,
          DeskNo: 0,
          OfficeName: "",
          OfficeAdmin: dk.OfficeAdmin,
          BuildingName: "",
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
  }

  assignClick(dk) {
    this.setState({
      modalTitle: "Assign desk",
      DeskID: dk.DeskID,
      EmployeeName: dk.EmployeeName,
      DeskNo: dk.DeskNo,
      OfficeName: dk.OfficeName,
      OfficeAdmin: dk.OfficeAdmin,
      BuildingName: dk.BuildingName,
    });
  }

  updateClick() {
    fetch(variables.API_URL + "Desks", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        DeskID: this.state.DeskID,
        EmployeeName: this.state.EmployeeName,
        DeskNo: this.state.DeskNo,
        OfficeName: this.state.OfficeName,
        OfficeAdmin: this.state.OfficeAdmin,
        BuildingName: this.state.BuildingName,
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

  changeDeskNo = (e) => {
    this.setState({ DeskNo: e.target.value });
  };

  changeOfficeName = (e) => {
    this.setState({ OfficeName: e.target.value });
  };

  changeBuildingName = (e) => {
    this.setState({ BuildingName: e.target.value });
  };

  render() {
    const { desk, modalTitle, EmployeeName, DeskNo, OfficeName, BuildingName } =
      this.state;
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Office Name</th>
              <th>Desk No</th>
              <th>Admin Name</th>
              <th>Assign</th>
              <th>De-Assign</th>
            </tr>
          </thead>
          <tbody>
            {desk.map((dk) => (
              <tr key={dk.EmployeeName}>
                <td> {dk.EmployeeName}</td>
                <td> {dk.OfficeName}</td>
                <td> {dk.DeskNo}</td>
                <td> {dk.OfficeAdmin}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success mr-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bookmark-plus-fill"
                      viewBox="0 0 16 16"
                      onClick={() => this.assignClick(dk)}
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z"
                      />
                    </svg>
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => this.deAssignClick(dk)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bookmark-dash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"
                      />
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
                  <span className="input-group-text">Employee Name</span>
                  <input
                    type="text"
                    className="form-control"
                    value={EmployeeName}
                    disabled
                  />
                </div>
              </div>

              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Desk No</span>
                  <input
                    type="text"
                    className="form-control"
                    value={DeskNo}
                    onChange={this.changeDeskNo}
                  />
                </div>
              </div>

              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Office Name</span>
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
                  <span className="input-group-text">Building Name</span>
                  <input
                    type="text"
                    className="form-control"
                    value={BuildingName}
                    onChange={this.changeBuildingName}
                  />
                </div>
              </div>
              {(EmployeeName && DeskNo && OfficeName && BuildingName) !== "" ? (
                <button
                  type="button"
                  className="btn btn-primary float-start"
                  onClick={() => this.updateClick()}
                >
                  Assign desk
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
