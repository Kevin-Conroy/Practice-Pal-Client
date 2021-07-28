import React from "react";
import ExerciseCard from "./ExerciseCard";
import DrumData from "./DrumData";
import { uuid } from 'uuidv4';

class Exercises extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Singles", currentTempo: "", goalTempo: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  

  handleSubmit(event) {
    alert(
      "Your chosen exercise is " +
        this.state.value +
        " with a current tempo of " +
        this.state.currentTempo +
        " and a goal tempo of " +
        this.state.goalTempo +
        "."
    );
    event.preventDefault();
    this.props.handleAddExercise({...this.state, id: uuid() });
    
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
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
            {DrumData.map((exercise) => (
                
              <option key={exercise.id} value={exercise.name}>{exercise.name}</option>
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
        <h2>Current Exercises:</h2>
        {this.props.exercises.map((exercise) => (
          <ExerciseCard
            name={exercise.value}
            currentTempo={exercise.currentTempo}
            goalTempo={exercise.goalTempo}
            updateTempos={this.handleUpdateTempos}
          />
        ))}
      </div>
    );
  }
}

export default Exercises;

/*
<select value={this.state.value} onChange={this.handleChange}>
            <option value="Singles">Singles</option>
            <option value="Doubles">Doubles</option>
            <option value="Triplets">Triplets</option>
            <option value="Paradiddles">Paradiddles</option>
            <option value="Flams">Flams</option>
          </select>

*/
