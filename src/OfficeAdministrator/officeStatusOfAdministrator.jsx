import React, { Component } from "react";
import { variables } from "../components/Variables";

export class officeStatusOfficeAdministrator extends Component {
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

      employees: [],
      FirstName: "",
      LastName: "",
      DeskNo: "",

      OfficeNameFilter: "",
      OfficeWithoutFilter: [],
    };
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
        this.setState({ office: data, OfficeWithoutFilter: data });
      });
  }

  changeOfficeNameFilter = (e) => {
    this.state.OfficeNameFilter = e.target.value;
    this.FilterFn();
  };

  componentDidMount() {
    this.refreshList();
  }

  employeesClick(OfficeName) {
    fetch(variables.API_URL + "Offices/" + OfficeName)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ employees: data });
      });
  }

  render() {
    const { office, employees, modalTitle, OfficeName } = this.state;
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
                <td> {of.TotalDesksCount}</td>
                <td> {of.UsableDesksCount}</td>
                <td> {of.OccupiedDesksCount}</td>
                <td> {of.UsableDesksCount - of.OccupiedDesksCount}</td>
                <td>
                  {(of.OccupiedDesksCount / of.UsableDesksCount).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
