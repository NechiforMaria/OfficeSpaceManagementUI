import React, { Component } from "react";
import "./userManagement.css";
export class UserManagement extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Add a new user </h2>
        <div className="create">
          <form>
            <label>Id *</label>
            <input type="text" required />

            <label>First Name *</label>
            <input type="text" required />

            <label>Last Name *</label>
            <input type="text" required />

            <label> Email Address *</label>
            <input type="text" required />

            <label> Password *</label>
            <input type="text" required />

            <label> Role * </label>
            <select>
              <option value="Choose">Choose</option>
              <option value="Administrator">Administrator</option>
              <option value="Office Administrator">Office Administrator</option>
              <option value="Employee">Employee</option>
            </select>

            <label> Gender * </label>
            <select>
              <option value="Choose">Choose</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>

            <label> Birth date </label>
            <input type="text" required />

            <label> Nationality </label>
            <input type="text" required />

            <label> All fields with * must be completed </label>

            <button>Add user</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
