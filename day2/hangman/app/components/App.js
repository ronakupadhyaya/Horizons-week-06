import React from 'react';
import { Route, Link } from 'react-router-DOM';
import About from './About';

import GameContainer from '../containers/GameContainer';

const App = () =>
    <div>
      <h1>Redux Hangman</h1>
      <Route path="/" exact component={GameContainer}/>
      <Route path="/about" component={About}/>
      <Link to="/">Game </Link>
      <Link to="/about">About</Link>
    </div>;

export default App;
