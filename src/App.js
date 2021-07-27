import React from "react";
import Welcome from "./Welcome";
import "./App.css";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Header from "./Header";
import ProfileForm from "./ProfileForm";
import Exercises from "./Exercises";
import EditTempos from "./EditTempos"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateUser = this.updateUser.bind(this);
    this.state = {
      username: "",
      exercises: [],
    };
  }

  updateUser(username) {
    console.log(username);
    this.setState({
      username,
    });
  }

  handleAddExercise = (exercise) => {
    this.setState({
      exercises: [...this.state.exercises, exercise],
    });
  };

  handleUpateExercise = (updatedExercise) => {
    this.setState({
      exercises: [...this.state.exercises, updatedExercise],
    });
  };

  
  render() {
    return (
      <main className="App">
        <div>
          <Router>
            <Header />
            <Route exact path="/" component={Welcome} />
            <Route
              exact
              path="/profileform"
              render={() => <ProfileForm updateUser={this.updateUser} />}
            />
            <Route
              exact
              path="/exercises"
              render={() => (
                <Exercises
                  exercises={this.state.exercises}
                  handleAddExercise={this.handleAddExercise}
                />
              )}
            />
            <Route
              exact
              path="/edittempos/:value"
              render={() => (
                <EditTempos exercises={this.state.exercises} updateExercise={this.handleUpdateExercise}/>
              )}
            />
          </Router>
        </div>
      </main>
    );
  }
}

export default App;
