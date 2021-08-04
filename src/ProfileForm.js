import React from "react";
import { withRouter } from "react-router-dom";

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
      alert("Username and password are required");
    }
    const user = this.state;
    const url = "https://enigmatic-fjord-69798.herokuapp.com/user";
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(user);
    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.props.addUser(data);
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
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
        <label>password:</label>
        <input
          required
          type="text"
          id="password"
          value={this.state.password}
          onChange={(event) => this.updatePassword(event.target.value)}
        ></input>
        <br></br>
        <button onClick={this.handleSubmit.bind(this)}>
          Submit
        </button>
      </form>
    );
  }
}

export default withRouter(ProfileForm);
