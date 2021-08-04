import axios from "axios";
import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      username: "",
      password: "",
    };
  }

  updateUsername(username) {
    this.setState({ username });
  }

  updatePassword(password) {
    this.setState({ password });
  }

  handleLogin(event) {
    event.preventDefault();
    const { username, password } = this.state;
    axios
      .post("http://localhost:8000/login", { username, password })
      .then((response) => response.data)
      .then((response) => {
        if (!response.successfulLogin) {
          return alert(`${response.field} is incorrect `);
        }
        this.props.setLoggedInUser(response.userId);
        localStorage.setItem("PracticePalToken", response.token)
        
        this.props.history.push('/exercises');
      });
  }

  render() {
    return (
      <form>
        <label>Username:</label>
        <input
          type="text"
          id="username"
          value={this.state.username}
          onChange={(event) => this.updateUsername(event.target.value)}
        />
        <br></br>
        <label>Password:</label>
        <input
          required
          type="password"
          id="password"
          value={this.state.password}
          onChange={(event) => this.updatePassword(event.target.value)}
        ></input>
        <br></br>

        <br></br>

        <button type="submit" onClick={this.handleLogin.bind(this)}>
          Submit
        </button>
      </form>
    );
  }
}

export default LoginForm;