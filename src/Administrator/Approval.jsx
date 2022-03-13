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
                  <button type="button" className="btn btn-success mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    className="btn btn-danger mr-1"
                    onClick={() => this.rejectClick(req.RequestNo)}
                  >
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
      </div>
    );
  }
}
