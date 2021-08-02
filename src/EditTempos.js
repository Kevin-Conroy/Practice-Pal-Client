import React from "react";
import { withRouter } from "react-router-dom";

class EditTempos extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      currentTempo: this.props.exerciseToUpdate.currentTempo,
      goalTempo: this.props.exerciseToUpdate.goalTempo,
      id: this.props.exerciseToUpdate.id,
      name: this.props.exerciseToUpdate.name,
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props.exercises);
    this.handleUpdateTempos(this.state);
    this.props.updateExercise(this.state);
    this.props.history.push("/exercises");
    const id = this.state.id;
    console.log(id);
    const updatedExercise = {
      currentTempo: this.state.currentTempo,
      goalTempo: this.state.goalTempo,
    };

    const url = `http://localhost:8000/edittempos/${id}`;
    const options = {
      method: "PATCH",
      body: JSON.stringify(updatedExercise),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return res.json();
      })
      .then((data) => {})
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  }

  handleInput = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  };

  handleUpdateTempos = (exercise) => {
    this.setState({
      currentTempo: this.state.currentTempo,
      goalTempo: this.state.goalTempo,
      id: this.state.id,
      name: this.state.name,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Update Tempos for {this.props.exerciseToUpdate.name}</h2>
          <br></br>
          <p>Current Tempo:</p>
          <input
            id="current"
            type="text"
            value={this.state.currentTempo}
            onChange={this.handleInput("currentTempo")}
          />
          <br></br>
          <p>Goal Tempo:</p>
          <input
            id="goal"
            type="text"
            value={this.state.goalTempo}
            onChange={this.handleInput("goalTempo")}
          />
          <br></br>
          <input type="submit" value="Update Tempos" />
        </form>
      </div>
    );
  }
}

export default withRouter(EditTempos);
