import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import EditTempos from "./EditTempos";

class ExerciseCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <main className="box">
        <div>
          <h3>Name: {this.props.name}</h3>
          <h5>Current Tempo: {this.props.currentTempo}</h5>
          <h5>Goal Tempo: {this.props.goalTempo}</h5>
          <Link to={`/edittempos/${this.props.name}`}>
            <button>Edit Tempos</button>
          </Link>
        </div>
      </main>
    );
  }
}

export default ExerciseCard;
