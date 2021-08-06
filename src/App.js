import React from "react";
import Welcome from "./Welcome";
import "./App.css";
import { Router, Route, withRouter } from "react-router-dom";
import Header from "./Header";
import ProfileForm from "./ProfileForm";
import Exercises from "./Exercises";
import EditTempos from "./EditTempos";
import { createBrowserHistory } from "history";
import LoginForm from "./LoginForm";

const history = createBrowserHistory();



class App extends React.Component {
  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
    this.handleUpdateExercise = this.handleUpdateExercise.bind(this)
    this.handleLoadExercises = this.handleLoadExercises.bind(this)
    this.setLoggedInUser = this.setLoggedInUser.bind(this)
    this.state = {
      userId: "",
      exercises: [],
    };
  }

  addUser(user) {
    localStorage.setItem("PracticePalToken", user.token);
    this.setState({
      userId: user.id
      },
    
    () => history.push(`/exercises/`));
  }

  setLoggedInUser(userId) {
    this.setState({ userId });
  }


  handleAddExercise = (exercise) => {
    this.setState({
      exercises: [...this.state.exercises, exercise],
    });
  };

  handleLoadExercises(exercises) {
    this.setState({ exercises })
  }
  

  handleUpdateExercise = (updatedExercise) => {
    const indexToUpdate = this.state.exercises.findIndex(
      (i) => i.id === updatedExercise.id
    );

    if (indexToUpdate !== -1) {
    const updatedExercises = [...this.state.exercises]
    updatedExercises[indexToUpdate] = updatedExercise;
    this.setState({ exercises: updatedExercises })
    }
  };

  render() {
    return (
      <main className="App">
        <div>
          <Router history={history}>
            <Header />
            <Route exact path="/" component={Welcome} />
            <Route
              exact
              path="/profileform"
              render={(props) => <ProfileForm addUser={this.addUser} />}
            />
            <Route
              exact
              path="/exercises"
              render={() => (
                <Exercises
                  userId={this.state.userId}
                  exercises={this.state.exercises}
                  handleAddExercise={this.handleAddExercise}
                />
              )}
            />
            <Route
              exact
              path="/edittempos/:id"
              render={(props) => {
                const exerciseToUpdate = this.state.exercises.find(
                  (e) =>
                    String(e.id) ===
                   (props.match.params.id)
                );
                return (
                <EditTempos 
                  userId={this.state.userId}
                  exercises={this.state.exercises}
                  exerciseToUpdate={exerciseToUpdate}
                  updateExercise={this.handleUpdateExercise}
                  />
                  
              )}}
            />
            <Route
              exact
              path="/login"
              render={(props) => {
                return (
                  <LoginForm
                    setLoggedInUser={this.setLoggedInUser}
                    history={history}
                    handleLoadExercises={this.handleLoadExercises}
                  />
                );
              }}
            />
          </Router>
        </div>
      </main>
    );
  }
}

export default App;