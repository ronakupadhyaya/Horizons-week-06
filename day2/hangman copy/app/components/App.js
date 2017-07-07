import React from 'react';

import GameContainer from '../containers/GameContainer';
import About from './About';

import {Link, Route} from 'react-router-dom';

const App = () =>
    <div>
      <h1>Redux Hangman</h1>
      <Route path="/" component={GameContainer} exact/>
      <Route path="/about" component={About}/>
      <Link to="/">Game</Link>
      <Link to="/about">About</Link>
    </div>;

export default App;
