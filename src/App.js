import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container"></main>
      </React.Fragment>
    );
  }
}
export default App;
