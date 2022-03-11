import React, { Component } from "react";
import { Search } from "../components/Search";
import { variables } from "../components/Variables";

export class officeStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      office: [],
      OfficeName: "",
      BuildingName: "",
      FloorNo: "",
      OfficeAdminName: "",
      TotalDesksCount: "",
      UsableDesksCount: "",
      OccupiedDesksCount: "",
      FreeDesksCount: "",
      Occupiedpercentage: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "Offices")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ office: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  render() {
    const { office } = this.state;
    return (
      <div>
        <label className=" m-2">Search a specific office: </label>

        <Search />
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
                    data-bs-target="#exampleModal"
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
                <td> {of.TotalDesksCount}</td>
                <td> {of.UsableDesksCount}</td>
                <td> {of.OccupiedDesksCount}</td>
                <td> {of.UsableDesksCount - of.OccupiedDesksCount}</td>
                <td>{of.OccupiedDesksCount / of.OccupiedDesksCount + "%"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
