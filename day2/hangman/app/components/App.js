import React from 'react';

import GameContainer from '../containers/GameContainer';
import About from './About';
import { Link, Route } from 'react-router-dom';

const App = () =>
<div>
  <h1>Redux Hangman</h1>
  <Route path="/" exact="true" component={GameContainer}/>
  <Route path="/about" component={About}/>
  <Link to="/" style={{ display: 'block' }}>Game</Link>
  <Link to="/about">About</Link>
</div>;

export default App;
