import React, { Component } from "react";
import { variables } from "../components/Variables";

export class Approval extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: [],
      EmployeeName: "",
      RemotePercent: "",
      RequestMsg: "",
      RequestNo: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "Requests")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ requests: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  rejectClick(id) {
    if (window.confirm("Are tou sure?")) {
      fetch(variables.API_URL + "Requests/" + id, {
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
    const { requests } = this.state;
    return (
      <div>
        <h4>Request management</h4>
        <br></br>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Remote Percent</th>
              <th>Request Message</th>
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.EmployeeName}>
                <td> {req.EmployeeName}</td>
                <td>{req.RemotePercent + "%"}</td>
                <td> {req.RequestMsg}</td>
                <td>
                  <button type="button" className="btn btn-primary mr-1">
                    Approve
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    className="btn btn-danger mr-1"
                    onClick={() => this.rejectClick(req.RequestNo)}
                  >
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
