import React, { Component } from "react";
import { variables } from "../components/Variables";

export class MyRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: [],
      RequestMsg: "",
      RemotePercent: "",
      ReqStatus: "",
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

  render() {
    const { requests } = this.state;
    return (
      <div>
        <h4>Request management</h4>
        <br></br>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Request </th>
              <th>Remote Percent</th>
              <th>Status Request</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.RequestMsg}>
                <td> {req.RequestMsg}</td>
                <td>{req.RemotePercent}%</td>
                <td>
                  {req.ReqStatus === "Pending" ? (
                    <label>Pending</label>
                  ) : req.ReqStatus === "Approved" ? (
                    <label>Approved</label>
                  ) : (
                    <label>Rejected</label>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
