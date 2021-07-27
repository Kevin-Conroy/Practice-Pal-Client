import React from "react";
import { withRouter } from "react-router-dom"

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
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

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.username || !this.state.password) {
      alert("Please enter a username & a password");
    } else {
      this.props.updateUser(this.state.username);
    }
    this.props.history.push('/exercises');
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
        <label>password:</label>
        <input
          required
          type="text"
          id="password"
          value={this.state.password}
          onChange={(event) => this.updatePassword(event.target.value)}
        ></input>
        <br></br>
        <button type="submit" onClick={this.handleSubmit.bind(this)}>
          Submit
        </button>
      </form>
    );
  }
}

export default withRouter(ProfileForm);