import React, { Component } from "react";
import Slider from "../components/Slider";
import "./Request.css";

export class Request extends Component {
  render() {
    return (
      <React.Fragment>
        <br></br>
        <h2 className=" m-2">Request to work remote</h2>
        <br></br>
        <label className=" m-2">
          Percentage of remote work time from a month *
        </label>
        <Slider />
        <div>
          <label className=" m-2">
            Reason or which they are making this request *
          </label>
        </div>
        <div>
          <input className="comment m-2"></input>
        </div>

        <div>
          <label className=" m-2">All fields with * must be completed</label>
        </div>
        <button className="btn btn-primary m-2">Request</button>
      </React.Fragment>
    );
  }
}
