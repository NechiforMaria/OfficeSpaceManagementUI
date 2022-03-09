import React from "react";

export class LoginForm extends React.Component {
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
    if (this.state.username === Username && this.state.password === passUsername) alert("Login ok");
    else {
      alert("Login failed");
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <form id="login-form" onSubmit={this.handleSubmit}>
          <label className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand"> No More Bugs</span>
          </label>
          <hr className="solid" />
          <br />
          <i className="fa-solid fa-user-group"></i>
          <br />
          <br />
          <br />
          <label className="label accessAccount">Login to access your account</label>
          <br />
          <br />
          <i className="fa-solid fa-user"></i>
          <input
            className="input-field"
            type="text"
            id="username"
            onChange={this.handleUsernameChange}
          />

          <br />
          <i className="fa-solid fa-lock"></i>
          <input
            className="input-field"
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
    );
  }
}
LoginForm.defaultProps = {
  Username: "",
  Password: "",
};
export default LoginForm;
