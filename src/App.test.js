import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EditTempos from './EditTempos';
import Header from "./Header";
import ProfileForm from "./ProfileForm";
import Exercises from "./Exercises";
import LoginForm from "./LoginForm";
import Welcome from "./Welcome";
import ExerciseCard from "./ExerciseCard";
import { Router, Route, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router history={history} ><EditTempos exerciseToUpdate={{ goalTempo: 100, currentTempo: 100 }}/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router history={history} ><ExerciseCard /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router history={history} ><Exercises  exercises={[{ name: "Singles", goalTempo: 100, currentTempo: 100 }]} /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router history={history} ><Header /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router history={history} ><LoginForm /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router history={history} ><ProfileForm /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router history={history} ><Welcome /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});