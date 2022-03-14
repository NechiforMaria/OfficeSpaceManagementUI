import React, { Component } from "react";
import { variables } from "../components/Variables";

export class Approval extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: [],
      modalTitle: "",
      RequestNo: "",
      EmployeeName: "",
      RemotePercent: "",
      RequestMsg: "",
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

  rejectClick() {
    if (window.confirm("Are tou sure?")) {
      fetch(variables.API_URL + "Requests", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          RequestNo: this.state.RequestNo,
          EmployeeName: this.state.EmployeeName,
          RemotePercent: this.state.RemotePercent,
          RequestMsg: this.state.RequestMsg,
          ReqStatus: this.state.ReqStatus,
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

  editClick(req) {
    this.setState({
      modalTitle: "Edit request",
      RequestNo: req.RequestNo,
      EmployeeName: req.EmployeeName,
      RemotePercent: req.RemotePercent,
      RequestMsg: "",
      ReqStatus: "Rejected",
    });
  }

  handlerOnChangeComment = (e) => this.setState({ RequestMsg: e.target.value });

  statusUpdateClick(ReqStatus, RequestNo) {
    fetch(variables.API_URL + "Requests/" + ReqStatus + "," + RequestNo, {
      method: "PUT",
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

  render() {
    const { requests, modalTitle, RequestMsg } = this.state;
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
                  <button
                    type="button"
                    disabled=""
                    className="btn btn-success mr-1"
                    style={
                      req.ReqStatus === "Approved"
                        ? { opacity: 1 }
                        : { opacity: 0.5 }
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                      id="active-status"
                      onClick={() =>
                        this.statusUpdateClick("Approved", req.RequestNo)
                      }
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    style={
                      req.ReqStatus === "Rejected"
                        ? { opacity: 1 }
                        : { opacity: 0.5 }
                    }
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="btn btn-danger mr-1"
                    onClick={() => this.editClick(req)}
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

              <div>
                <textarea
                  className="form-comment m-2"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  value={RequestMsg}
                  onChange={this.handlerOnChangeComment}
                ></textarea>
              </div>

              <button
                type="button"
                className="btn btn-primary float-start"
                onClick={() => this.rejectClick()}
              >
                Reject request
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
