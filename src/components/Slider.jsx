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
          step={25}
          value={this.state.value}
          className="form-range"
          onChange={this.handlerOnChange}
        ></input>
        <div id="value" className="value m-2">
          {this.state.value + "%"}
        </div>
      </div>
    );
  }
}
