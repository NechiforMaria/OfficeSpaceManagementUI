import React, { Component } from "react";
import "./Request.css";
import { variables } from "../components/Variables";

export class Request extends Component {
  constructor(props) {
    super(props);

    this.state = {
      request: [],
      EmployeeName: "",
      RequestMsg: "",
      textArea: "",
      ReqStatus: "",
      value: 0,
    };
  }
  refreshList() {
    fetch(variables.API_URL + "Requests")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ requests: data });
      });
  }

  requestClick() {
    fetch(variables.API_URL + "Requests", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        EmployeeName: this.state.EmployeeName,
        RemotePercent: this.state.value,
        RequestMsg: String(this.state.textArea),
        ReqStatus: "Pending",
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

  handlerOnChange = (e) => this.setState({ value: e.target.value });
  handlerOnChangeComment = (e) => this.setState({ textArea: e.target.value });

  render() {
    return (
      <React.Fragment>
        <h3 className=" m-2">Request to work remote</h3>

        <label className=" m-2">
          Percentage of remote work time from a month: *
        </label>
        <div>
          <input
            type="range"
            min={0}
            max={100}
            step={25}
            value={this.state.value}
            className="form-range m-2"
            onChange={this.handlerOnChange}
          ></input>
          <div id="value" className="value m-2">
            {this.state.value + "%"}
          </div>
        </div>

        <label className=" m-2">Legend:</label>
        <br></br>
        <label className=" m-2">0%-no remote</label>
        <label className=" m-2">25%-one weeks remote</label>
        <label className=" m-2">50%-two weeks remote</label>
        <label className=" m-2">75%-tree weeks remote</label>
        <label className=" m-2">100%-fully remote</label>
        <div>
          <label className="Reason m-2">
            The reason why I make this request: *
          </label>
        </div>
        <div>
          <textarea
            className="form-comment m-2"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={this.handlerOnChangeComment}
          ></textarea>
        </div>

        <div>
          <label className=" m-2">All fields with * must be completed</label>
        </div>
        {this.state.value !== 0 && this.state.textArea !== "" ? (
          <button
            className="btn btn-primary m-2"
            onClick={() => this.requestClick()}
          >
            Request
          </button>
        ) : null}
        <br></br>
        <br></br>
        <br></br>
      </React.Fragment>
    );
  }
}
