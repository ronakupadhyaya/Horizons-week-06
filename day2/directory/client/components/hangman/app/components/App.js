import React from 'react';
import { Route, Link } from 'react-router-DOM';
import About from './About';

import GameContainer from '../containers/GameContainer';

const App = () =>
  <div>
    <h1>Redux Hangman</h1>
    <Route path="/hangman/" exact component={GameContainer} />
    <Route path="/hangman/about" component={About} />
    <Link to="/hangman/">Game </Link>
    <Link to="/hangman/about">About</Link>
  </div>;

export default App;
