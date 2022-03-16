import React, { Component } from "react";
import { variables } from "../components/Variables";
import Chart from "react-apexcharts";

export class officeStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      office: [],
      OfficeID: "",
      OfficeName: "",
      BuildingName: "",
      FloorNo: "",
      OfficeAdminName: "",
      TotalDesksCount: "",
      UsableDesksCount: "",
      OccupiedDesksCount: "",
      FreeDesksCount: "",
      Occupiedpercentage: "",
      totalDesk: 0,
      usableDesk: 0,
      occupiedDesk: 0,
      freeDesk: 0,
      employees: [],
      FirstName: "",
      LastName: "",
      DeskNo: "",

      OfficeNameFilter: "",
      OfficeWithoutFilter: [],

      options: {
        series: [],
        labels: ["Total Desk", "Usable Desk", "Occupied Desk", "Free Desk"],
      },
    };
  }

  updateClick() {
    fetch(variables.API_URL + "Offices", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        OfficeID: this.state.OfficeID,
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

  FilterFn() {
    var OfficeNameFilter = this.state.OfficeNameFilter;

    var filteredData = this.state.OfficeWithoutFilter.filter(function (el) {
      return String(el.OfficeName)
        .toLowerCase()
        .includes(OfficeNameFilter.trim().toLowerCase());
    });

    this.setState({ office: filteredData });
  }

  refreshList() {
    fetch(variables.API_URL + "Offices")
      .then((response) => response.json())
      .then((data) => {
        let total = this.totalDesks(data);
        let usable = this.totalUsable(data);
        let occupied = this.totalOccupaid(data);
        let free = this.totalFree(data);
        this.setState({
          office: data,
          OfficeWithoutFilter: data,
          totalDesk: total,
          usableDesk: usable,
          occupiedDesk: occupied,
          freeDesk: free,
          series: [total, usable, occupied, free],
        });
      });
  }

  changeOfficeNameFilter = (e) => {
    this.state.OfficeNameFilter = e.target.value;
    this.FilterFn();
  };

  componentDidMount() {
    this.refreshList();
  }

  changeBuildingName = (e) => {
    this.setState({ BuildingName: e.target.value });
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

  deleteClick(id) {
    if (window.confirm("Are tou sure?")) {
      fetch(variables.API_URL + "Offices/" + id, {
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

  editClick(of) {
    this.setState({
      modalTitle: "Edit office",
      OfficeID: of.OfficeID,
      OfficeName: of.OfficeName,
      BuildingName: of.BuildingName,
      FloorNo: of.FloorNo,
      OfficeAdminName: of.OfficeAdminName,
      TotalDesksCount: of.TotalDesksCount,
      UsableDesksCount: of.UsableDesksCount,
      OccupiedDesksCount: of.OccupiedDesksCount,
    });
  }

  employeesClick(OfficeeName) {
    this.setState({
      modalTitle: "Employees",
      OfficeName: this.state.OfficeName,
    });
    fetch(variables.API_URL + "Offices/" + OfficeeName)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          employees: data,
          modalTitle: "Employees",
          OfficeName: OfficeeName,
        });
      });
  }

  totalDesks(value) {
    let x = 0;
    value.forEach((element) => (x = x + element.TotalDesksCount));
    return x;
  }

  totalUsable(value) {
    let x = 0;
    value.forEach((element) => (x = x + element.UsableDesksCount));
    return x;
  }

  totalOccupaid(value) {
    let x = 0;
    value.forEach((element) => (x = x + element.OccupiedDesksCount));
    return x;
  }

  totalFree(value) {
    let x = 0;
    value.forEach(
      (element) =>
        (x = x + (element.UsableDesksCount - element.OccupiedDesksCount))
    );
    return x;
  }

  render() {
    const {
      office,
      employees,
      modalTitle,
      BuildingName,
      OfficeName,
      FloorNo,
      OfficeAdminName,
      TotalDesksCount,
      UsableDesksCount,
      OccupiedDesksCount,
    } = this.state;
    return (
      <div>
        <label className=" m-2">Search a specific office: </label>

        <span className="Icon-inside">
          <input
            className="input-field mb-3"
            type="text"
            placeholder="Search"
            name="search"
            onChange={this.changeOfficeNameFilter}
          />
        </span>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Office Name</th>
              <th>Building Name</th>
              <th>Floor Nr</th>
              <th>Office Adimn Name</th>
              <th>All Employees</th>
              <th>Total Desks Count</th>
              <th>Usable Desks Count</th>
              <th>Occupied Desks Count</th>
              <th>Free Desks Count</th>
              <th>Occupied percentage</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {office.map((of) => (
              <tr key={of.OfficeName}>
                <td> {of.OfficeName}</td>
                <td> {of.BuildingName}</td>
                <td> {of.FloorNo}</td>
                <td> {of.OfficeAdminName}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-list-task"
                      viewBox="0 0 16 16"
                      onClick={() => this.employeesClick(of.OfficeName)}
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                      />
                      <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                      <path
                        fillRule="evenodd"
                        d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                      />
                    </svg>
                  </button>
                </td>
                <td> {of.TotalDesksCount} </td>

                <td> {of.UsableDesksCount}</td>
                <td> {of.OccupiedDesksCount}</td>
                <td> {of.UsableDesksCount - of.OccupiedDesksCount}</td>
                <td>
                  {(of.OccupiedDesksCount / of.UsableDesksCount).toFixed(2)}%
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-secondary mr-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.editClick(of)}
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
                      onClick={() => this.deleteClick(of.OfficeID)}
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="donut">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            width="380"
          />
        </div>
        <label className="m-2">Metrics for buildings</label>

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
                  <span className="input-group-text">Office Admin Name</span>
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

              <button
                type="button"
                className="btn btn-primary float-start"
                onClick={() => this.updateClick()}
              >
                Update office
              </button>
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
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Desk No</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map((emp) => (
                        <tr key={emp.FirstName}>
                          <td>{emp.FirstName}</td>
                          <td>{emp.LastName}</td>
                          <td>{emp.DeskNo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
