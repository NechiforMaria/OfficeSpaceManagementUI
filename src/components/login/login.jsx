import React from "react";

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {},
      errors: {},
    };
    alert("In progress");
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["username"] = "";
      input["password"] = "";
      this.setState({input: input});
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["username"]) {
      isValid = false;
      errors["username"] = "Please enter your username.";
    }
    if (input["username"] === "user") {
      alert("Hi");
    }
    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }
    this.setState({
      errors: errors,
    });

    return isValid;
  }
  render() {
    return (
      <div class="container-fluid">
        <form id="login-form" onSubmit={this.handleSubmit}>
          <label class="companyName">No More Bugs</label>
          <br />
          <hr class="solid" />
          <br />
          <i class="fa-solid fa-user-group"></i>
          <br />
          <br />
          <br />
          <label class="label accessAccount">Login to access your account</label>
          <br />
          <br />
          <i class="fa-solid fa-user"></i>
          <input
            class="input-field"
            type="text"
            placeholder="Username"
            id="username"
            value={this.state.input.username}
            onChange={this.handleChange}
          />
          <br />
          <i class="fa-solid fa-lock"></i>
          <input
            class="input-field"
            type="password"
            id="password"
            placeholder="Password"
            value={this.state.input.password}
            onChange={this.handleChange}
          />
          <br />
          <input class="checkbox" type="checkbox" />
          <span class="checkbox"></span>
          <label class="label lblBox" for="checkbox">
            Remember Me
          </label>
          <br />
          <input
            type="submit"
            class="btnLI"
            id="login-form-submit"
            value="Login"
            onclick={this.handleSubmit}
          />
          <br />
        </form>
      </div>
    );
  }
}
export default LoginForm;
