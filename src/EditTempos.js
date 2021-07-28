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
        this.props.exercise.name +
        " are Current: " +
        this.state.currentTempo +
        " and Goal: " +
        this.state.goalTempo +
        "."
    );
    event.preventDefault();
    console.log(this.props.exercises);
    console.log(this.props.match.params.value)
    
    this.handleUpdateTempos(this.state);
    this.props.updateExercise(this.state)
    this.props.history.push("/exercises");
  }

  handleInput = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  };

  handleUpdateTempos = (exercise) => {
    this.setState({
      currentTempo: this.state.currentTempo,
      goalTempo: this.state.goalTempo,
    });
  };


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
