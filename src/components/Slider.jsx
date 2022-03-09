import { render } from "@testing-library/react";
import React from "react";
import "./Slider.css";

export default class Slider extends React.Component {
  state = {
    value: 0,
  };

  handlerOnChange = (e) => this.setState({ value: e.target.value });

  render() {
    return (
      <div>
        <input
          type="range"
          min={0}
          max={100}
          value={this.state.value}
          class="form-range m-2"
          onChange={this.handlerOnChange}
        ></input>
        <div className="value m-2">{this.state.value}</div>
      </div>
    );
  }
}
