import React from "react";
import { withRouter } from "react-router-dom";

class EditTempos extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      currentTempo: "",
      goalTempo: "",
    };
  }

  handleSubmit(event) {
    alert(
      "Your new tempos for " +
        this.props.exercises.name +
        " are Current: " +
        this.state.currentTempo +
        " and Goal: " +
        this.state.goalTempo +
        "."
    );
    event.preventDefault();
    console.log(this.props.exercises);
    this.props.history.push("/exercises");
    this.handleUpdateTempos(this.state)
  }

  handleInput = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  };

  handleUpdateTempos = (exercise) => ({
    ...exercise,
    currentTempo: this.state.currentTempo,
    goalTempo: this.state.goalTempo,
  });

  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Update Tempos</h2>
          <br></br>
          <h4></h4>
          <p>Current Tempo:</p>
          <input
            id="current"
            type="text"
            placeholder="90"
            onChange={this.handleInput("currentTempo")}
          />
          <br></br>
          <p>Goal Tempo:</p>
          <input
            id="goal"
            type="text"
            placeholder="100"
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
