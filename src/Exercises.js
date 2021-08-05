import React from "react";
import ExerciseCard from "./ExerciseCard";
import ExerciseData from "./ExerciseData";
import { uuid } from "uuidv4";
import axios from "axios";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

class Exercises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "DRUMS: Singles",
      currentTempo: "",
      goalTempo: "",
    };
    console.log(this.state);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.currentTempo || !this.state.goalTempo) {
      alert("Current and goal tempo are required");
    }
    const id = this.props.userId;
    console.log(id);
    const exercise = {
      userId: this.props.userId,
      name: this.state.name,
      currentTempo: this.state.currentTempo,
      goalTempo: this.state.goalTempo,
    };
    const url = `https://enigmatic-fjord-69798.herokuapp.com/exercises`;
    const options = {
      method: "POST",
      body: JSON.stringify(exercise),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(exercise);
    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return res.json();
      })
      .then((data) => {
        this.setState({
          name: "",
          currentTempo: "",
          goalTempo: "",
        });
        this.props.handleAddExercise(data);
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleInput = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  };

  handleUpdateTempos = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>My Exercises</h2>
          <select value={this.state.value} onChange={this.handleChange}>
            {ExerciseData.map((exercise) => (
              <option key={exercise.id} value={exercise.name}>
                {exercise.name}
              </option>
            ))}
          </select>
          <br></br>
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
          <input type="submit" value="Add Exercise" />
        </form>
        <br></br>
        {this.props.exercises.length > 0 && <h2>Current Exercises:</h2>}
        {this.props.exercises.map((exercise) => (
          <ExerciseCard
            userId={this.props.userId}
            id={exercise.id}
            name={exercise.name}
            currentTempo={exercise.currentTempo}
            goalTempo={exercise.goalTempo}
            updateTempos={this.handleUpdateTempos}
          />
        ))}
      </div>
    );
  }
}

export default withRouter(Exercises);
