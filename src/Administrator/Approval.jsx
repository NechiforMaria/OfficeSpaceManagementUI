import React, { Component } from "react";
import { variables } from "../components/Variables";

export class Approval extends Component {
  constructor(props) {
    super(props);

    this.state = {
      request: [],
      EmployeeName: "",
      Reason: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "Request")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ request: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  render() {
    const { request, EmployeeName, Reason } = this.state;
    return (
      <div>
        <h4>Request management</h4>
        <br></br>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Reason</th>
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {request.map((req) => (
              <tr key={req.EmployeeName}>
                <td> {req.EmployeeName}</td>
                <td> {req.Reason}</td>
                <td>
                  <button type="button" className="btn btn-primary mr-1">
                    Approve
                  </button>
                </td>

                <td>
                  <button type="button" className="btn btn-danger mr-1">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
