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
    console.log(user.id);
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
    console.log(updatedExercise);
    console.log(updatedExercise.id)
    console.log(updatedExercise.name)
    const indexToUpdate = this.state.exercises.findIndex(
      (i) => i.id === updatedExercise.id
    );

    if (indexToUpdate !== -1) {
    const updatedExercises = [...this.state.exercises]
    updatedExercises[indexToUpdate] = updatedExercise;
    console.log(updatedExercise)
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
                console.log(exerciseToUpdate);
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

export default withRouter(App);

/*
its not actually updating any existing exercise in state
10:46
so what i would do is in that method basically do what i showed you in the first screenshot i sent
10:47
where you find the index of old exercise in state based on something
10:47
maybe when you create an exercise just give it a uuid for now just so you know the id will be unique
10:48
find the index of the item based on the id
if the index is not -1 then overwrite the value at that index
10:48
then set state with the new list of exercises
10:49
(if indexOf returns -1 that means it couldnt find an item that matches the predicate you passed in)

kcdrumming  10:49 AM
ok

James Willett  10:49 AM
like [1,2,3].indexOf(n => n === 4) will return -1

kcdrumming  10:49 AM
I will inevitably have questions but this generally makes sense

James Willett  10:50 AM
oh wait use findIndex, not indexOf
10:50
indexOf takes the actual value, not a predicate
10:50
which is no good for objects or arrays
*/
