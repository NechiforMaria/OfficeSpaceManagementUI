import React from "react";
import "./login.css";
import { BsFillPersonFill, BsFillLockFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import logo from "./Logo.jpg";

export class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }
  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }
  handleSubmit(event) {
    var Username = "user";
    var passUsername = "user";
    event.preventDefault();
    if (
      this.state.username === Username &&
      this.state.password === passUsername
    )
      alert("Login ok");
    else {
      alert("Login failed");
    }
    this.username.value = "";
    this.password.value = "";
  }

  render() {
    return (
      <div className="bkgImage">
        {/* <label className="navbar navbar-expand-lg navbar-dark bg-dark loginNav">
          <span className="navbar-brand">
            <img className=" logLogin" src={logo} alt="No More Bugs" style={{float: "left"}} />
          </span>
          <hr className="dotted" />
        </label> */}
        <div className="containerLogin">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <br />
            <i>
              <HiUserGroup
                size={40}
                style={{
                  position: "absolute",
                  top: 100,
                  left: -25,
                  marginTop: 60,
                }}
              />
            </i>
            <br />
            <br />
            <br />
            <label className="label accessAccount">
              Login to access
              <br /> your account
            </label>
            <br />
            <br />
            <i>
              <BsFillPersonFill size={30} />
            </i>
            <input
              className="input-fieldUsername"
              type="text"
              id="username"
              placeholder="Username"
              onChange={this.handleUsernameChange}
            />

            <br />
            <i>
              <BsFillLockFill size={30} />
            </i>
            <input
              className="input-fieldPassword"
              type="password"
              id="password"
              placeholder="Password"
              onChange={this.handlePasswordChange}
            />
            <br />
            <input className="checkbox" type="checkbox" />
            <span className="checkbox"></span>
            <label className="label lblBox" htmlFor="checkbox">
              Remember Me
            </label>
            <br />
            <input
              type="submit"
              className="btnLI"
              id="login-form-submit"
              value="Login"
              onClick={this.handleSubmit}
            />
            <br />
          </form>
        </div>
      </div>
    );
  }
}
LoginForm.defaultProps = {
  Username: "",
  Password: "",
};
export default LoginForm;
